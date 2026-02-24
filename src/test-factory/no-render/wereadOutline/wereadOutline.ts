import * as cheerio from "cheerio";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { isEmpty, tryit } from "radash";
import { createInterface } from "readline/promises";

type OutlineItem = {
  title: string;
  level: number;
};

const rl = createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

const readHtmlFile = (path: string) => {
  return tryit(readFile)(resolve(path), "utf-8");
  // return readFile(resolve(path), "utf-8");
};

const writeTxtFile = (content: string) => {
  return tryit(writeFile)("ai_outline.txt", content, "utf-8");
};

const extractOutlineFromHtml = (html: string | globalThis.Buffer) => {
  const $ = cheerio.load(html);
  const outlineItems: OutlineItem[] = [];

  // 提取目录内容
  $(".catalog_item").each((_, element) => {
    const title = $(element).text().trim();
    const level = $(element).attr("class")?.includes("sub_catalog_item")
      ? 2
      : 1;

    outlineItems.push({ title: title, level: level });
  });

  // 备选提取方案
  if (outlineItems.length === 0) {
    $("body").each((_, element) => {
      const title = $(element).text().trim();

      outlineItems.push({ title: title, level: 1 });
    });
  }

  if (isEmpty(outlineItems)) {
    return undefined;
  }

  return outlineItems
    .map((item) => `${"  ".repeat(item.level - 1)}${item.title}`)
    .join("\n");
};

const wereadOutline = async () => {
  console.log("欢迎使用微信读书大纲提取工具！");
  console.log(
    "现在仅支持相对路径 eg: src\\test-factory\\no-render\\wereadOutline\\阅读力.html",
  );

  const htmlPath = await rl.question("请输入HTML文件的路径: ");

  const [readError, html] = await readHtmlFile(htmlPath);

  if (!!readError || isEmpty(html)) {
    console.error("读取文件失败");
    rl.close();

    return;
  }

  const outline = extractOutlineFromHtml(html);
  if (!!outline) {
    console.log("\n提取的大纲内容：\n");
    console.log(outline);

    const [writeError] = await writeTxtFile(outline);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !!writeError
      ? console.log("写入文本文件失败")
      : console.log("写入文本文件成功");
  } else {
    console.log("未能找到大纲内容，请确认HTML文件是否正确。");
  }

  rl.close();
};

wereadOutline();
