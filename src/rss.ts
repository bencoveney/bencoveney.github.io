import { PostDetails, PostsDetails } from "./loadPosts.js";

export function getRss(posts: PostsDetails) {
  return `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ben Coveney</title>
    <link>https://bencoveney.com/</link>
    <description>Ben Coveney's personal website</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="http://bencoveney.com/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-gb</language>${Object.entries(posts)
      .filter(([_, post]) => !!post.published)
      .toSorted(
        (a, b) =>
          new Date(b[1].published!).getTime() -
          new Date(a[1].published!).getTime()
      )
      .map(([slug, post]) => item(slug, post))
      .join("")}
  </channel>
</rss>`;
}

export function item(slug: string, post: PostDetails) {
  return `
    <item>
      <title>${post.title}</title>
      <link>https://bencoveney.com/posts/${slug}.html</link>
      <guid>https://bencoveney.com/posts/${slug}.html</guid>
      <description>${post.summary}</description>
      <pubDate>${new Date(post.published!).toUTCString()}</pubDate>
    </item>`;
}
