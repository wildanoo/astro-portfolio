import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { formatBlogPosts } from "src/js/utils";

const postImportResult = import.meta.glob("./blog/**/*.{md,mdx}", {
  eager: true,
});
const posts = formatBlogPosts(Object.values(postImportResult), {});

export function GET(context) {
  return rss({
    stylesheet: '/rss/styles.xsl',
    // `<title>` field in output xml
    title: "Weabe Portfolio",
    // `<description>` field in output xml
    description: "All things related to coding",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    // items: [],
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      customData: `
        <author>${post.frontmatter.author}</author>`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
