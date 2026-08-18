import fs from 'node:fs/promises';

const OUTPUT_FILE = 'src/data/google-reviews.json';
const FALLBACK_FILE = 'src/data/google-reviews-fallback.json';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;
const profileUrl = process.env.GOOGLE_REVIEWS_PROFILE_URL || 'https://g.page/r/CQm9QH8xWk8SEAE/review';

async function fetchPlaceDetails() {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'name,rating,user_ratings_total,reviews');
  url.searchParams.set('key', apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Places API request failed: ${res.status}`);
  const json = await res.json();
  if (json.status !== 'OK') throw new Error(`Places API error: ${json.status} — ${json.error_message || ''}`);
  return json.result;
}

function normalize(place) {
  const reviews = (place.reviews || [])
    .map((r) => ({
      reviewId: null,
      authorName: r.author_name || 'Google User',
      rating: r.rating,
      comment: (r.text || '').trim(),
      publishedAt: r.time ? new Date(r.time * 1000).toISOString() : null,
      source: 'Google',
    }))
    .filter((r) => r.comment && r.rating > 0);

  return {
    source: 'api',
    lastUpdated: new Date().toISOString(),
    googleBusinessProfileUrl: profileUrl,
    rating: typeof place.rating === 'number' ? place.rating : null,
    totalReviewCount: typeof place.user_ratings_total === 'number' ? place.user_ratings_total : null,
    reviews,
  };
}

async function main() {
  if (!apiKey || !placeId) {
    console.log('Skipped Google review refresh: missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID.');
    try { await fs.access(OUTPUT_FILE); } catch { await fs.copyFile(FALLBACK_FILE, OUTPUT_FILE); }
    return;
  }
  try {
    const place = await fetchPlaceDetails();
    const normalized = normalize(place);
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(normalized, null, 2) + '\n');
    console.log(`Updated ${OUTPUT_FILE}: ${normalized.reviews.length} reviews, ${normalized.totalReviewCount} total, ${normalized.rating} stars.`);
  } catch (err) {
    console.log(`Google review refresh failed; preserving existing cache. ${err.message}`);
    try { await fs.access(OUTPUT_FILE); } catch { await fs.copyFile(FALLBACK_FILE, OUTPUT_FILE); }
  }
}

main();
