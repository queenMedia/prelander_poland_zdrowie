import type { ToBase64Config } from "@typing/utils/files";
import { unified } from "unified";
import parse from "remark-parse";
import toRehype from "remark-rehype";
import sanitize from "rehype-sanitize";
import links from "rehype-external-links";
import minify from "rehype-minify-whitespace";
import toString from "rehype-stringify";
export async function toBase64({ file, url = false }: ToBase64Config) {
  const reader = new FileReader();
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = (typeof reader.result === "string" && !url) ? reader.result
        .replace("data:", "")
        .replace(/^.+,/, "") : reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
  });
}

export async function serializeMD(md: string) {
  const html = await unified()
    .use(parse)
    .use(toRehype)
    .use(sanitize)
    .use(links, {
      target: "_blank",
      rel: ["nofollow", "noopener", "noreferrer"]
    })
    .use(minify)
    .use(toString)
    .process(md);

  return String(html);
}
