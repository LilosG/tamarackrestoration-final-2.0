export function titleCaseFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getCategorySlugsFromPosts(posts: Array<{ data: { category?: string } }>): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    const c = p.data.category;
    if (c) set.add(c);
  }
  // Sort deterministically for stable builds
  return [...set].sort((a, b) => titleCaseFromSlug(a).localeCompare(titleCaseFromSlug(b)));
}
