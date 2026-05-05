import fs from 'node:fs/promises';

const OUTPUT_FILE = 'src/data/google-reviews.json';
const FALLBACK_FILE = 'src/data/google-reviews-fallback.json';

const env = {
  accountId: process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID,
  locationId: process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID,
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  profileUrl: process.env.GOOGLE_REVIEWS_PROFILE_URL || 'https://g.page/r/CQm9QH8xWk8SEAE/review',
};

function mapStar(starRating) {
  const map = { ONE:1, TWO:2, THREE:3, FOUR:4, FIVE:5, STAR_RATING_UNSPECIFIED:0 };
  return map[starRating] ?? 0;
}

async function getAccessToken() {
  const body = new URLSearchParams({
    client_id: env.clientId,
    client_secret: env.clientSecret,
    refresh_token: env.refreshToken,
    grant_type: 'refresh_token',
  });
  const res = await fetch('https://oauth2.googleapis.com/token', { method:'POST', headers:{'content-type':'application/x-www-form-urlencoded'}, body });
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
  const json = await res.json();
  return json.access_token;
}

async function fetchReviews(accessToken) {
  const parent = `accounts/${env.accountId}/locations/${env.locationId}`;
  const url = new URL(`https://mybusiness.googleapis.com/v4/${parent}/reviews`);
  url.searchParams.set('pageSize', '50');
  url.searchParams.set('orderBy', 'updateTime desc');
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) throw new Error(`Reviews fetch failed: ${res.status}`);
  return res.json();
}

function normalize(data) {
  const reviews = (data.reviews || [])
    .map((r) => ({
      reviewId: r.reviewId,
      authorName: r.reviewer?.displayName || 'Google User',
      rating: mapStar(r.starRating),
      comment: (r.comment || '').trim(),
      publishedAt: r.createTime || null,
      updatedAt: r.updateTime || null,
      reviewerPhotoUrl: r.reviewer?.profilePhotoUrl || null,
      reviewReply: r.reviewReply?.comment || null,
      source: 'Google',
    }))
    .filter((r) => r.comment && r.rating > 0);

  return {
    source: 'api',
    lastUpdated: new Date().toISOString(),
    googleBusinessProfileUrl: env.profileUrl,
    rating: typeof data.averageRating === 'number' ? data.averageRating : null,
    totalReviewCount: Number.isFinite(data.totalReviewCount) ? data.totalReviewCount : null,
    reviews,
  };
}

async function main() {
  try {
    if (!env.accountId || !env.locationId || !env.clientId || !env.clientSecret || !env.refreshToken) {
      console.log('Skipped Google review refresh: missing required env vars.');
      return;
    }
    const token = await getAccessToken();
    const response = await fetchReviews(token);
    const normalized = normalize(response);
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(normalized, null, 2) + '\n');
    console.log(`Updated ${OUTPUT_FILE} with ${normalized.reviews.length} reviews.`);
  } catch (err) {
    console.log(`Google review refresh failed; preserving existing cache. ${err.message}`);
    try { await fs.access(OUTPUT_FILE); } catch { await fs.copyFile(FALLBACK_FILE, OUTPUT_FILE); }
  }
}

main();
