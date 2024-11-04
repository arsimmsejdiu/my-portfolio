import { DocumentTypeDef } from "contentlayer/core";
import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface DocType extends DocumentTypeDef {
  _raw: {
    flattenedPath: string;
  };
}

const computedFields: ComputedFields<"Doc"> = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw?.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw?.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    author: { type: "string", required: false },
    role: { type: "string", required: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        // @ts-ignore
        rehypePrettyCode as unknown as import("rehype").Plugin<any[], any, any>,
        ,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className = ["line-highlighted"]
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word-highlighted"]
          }
        },
      ],
    ],
  },
});
