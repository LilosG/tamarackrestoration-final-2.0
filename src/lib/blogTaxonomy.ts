import { blogCategoryHubs, getBlogCategoryHub, type BlogCategoryHub } from '@/data/blogCategoryHubs';

export function titleCaseFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function getCategorySlugsFromPosts(posts: Array<{ data: { category?: string } }>): string[] {
  const set = new Set<string>();
  for (const p of posts) {
    const c = p.data.category;
    if (c) set.add(c);
  }

  return [...set].sort((a, b) => {
    const aHub = getBlogCategoryHub(a);
    const bHub = getBlogCategoryHub(b);
    return aHub.priority - bHub.priority || aHub.label.localeCompare(bHub.label);
  });
}

export function getPublishedCategoryHubs(posts: Array<{ data: { category?: string } }>): BlogCategoryHub[] {
  return getCategorySlugsFromPosts(posts).map(getBlogCategoryHub);
}

export function getCategoryNameMap(posts?: Array<{ data: { category?: string } }>): Record<string, string> {
  const sourceSlugs = posts ? getCategorySlugsFromPosts(posts) : Object.keys(blogCategoryHubs);
  return Object.fromEntries(sourceSlugs.map((slug) => [slug, getBlogCategoryHub(slug).label]));
}

export { blogCategoryHubs, getBlogCategoryHub, getBlogCategoryHub as getCategoryHub };
export type { BlogCategoryHub };
