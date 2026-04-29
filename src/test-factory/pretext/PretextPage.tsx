import type { ChangeEvent, FC } from "react";
import { useDeferredValue, useEffect, useMemo, useState } from "react";

import {
  Card,
  Col,
  Input,
  Row,
  Select,
  Slider,
  Space,
  Statistic,
  Tag,
  Typography,
} from "antd";

import {
  clearCache,
  layout,
  type LayoutLine,
  layoutNextLine,
  layoutWithLines,
  prepare,
  type PreparedTextWithSegments,
  prepareWithSegments,
  setLocale,
  walkLineRanges,
} from "@chenglou/pretext";

type WhiteSpaceMode = "normal" | "pre-wrap";
type LocaleMode = "auto" | "en" | "zh" | "ja";

type FlowLine = LayoutLine & {
  x: number;
  y: number;
  maxWidth: number;
};

type FlowLayoutResult = {
  height: number;
  lines: FlowLine[];
};

type WidthSnapshot = {
  width: number;
  height: number;
  lineCount: number;
};

const fontFamilyCss = 'Georgia, "Times New Roman", serif';
const fontShorthand = `400 16px ${fontFamilyCss}`;
const defaultLineHeight = 24;
const whitespaceDemoText =
  "Line 1    keeps   spacing?\n\tIndented line 2\nMixed words stay visible.";
const featureTags = [
  "No DOM reflow in layout hot path",
  "Multiline height measurement",
  "Shrink-wrap bubble width",
  "Per-line custom widths",
  "Mixed language support",
  "Canvas / SVG / custom renderer friendly",
];

const toVisibleWhitespace = (value: string) => {
  return value.replace(/ /g, "·").replace(/\t/g, "⇥");
};

const round = (value: number) => {
  return Number(value.toFixed(1));
};

const countLines = (prepared: PreparedTextWithSegments, maxWidth: number) => {
  let lineCount = 0;

  walkLineRanges(prepared, maxWidth, () => {
    lineCount += 1;
  });

  return lineCount;
};

const findTightWidth = (
  prepared: PreparedTextWithSegments,
  maxWidth: number,
) => {
  const targetLineCount = countLines(prepared, maxWidth);

  let low = 1;
  let high = Math.max(1, Math.ceil(maxWidth));

  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    const middleLineCount = countLines(prepared, middle);

    if (middleLineCount <= targetLineCount) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }

  let widestLineWidth = 0;
  walkLineRanges(prepared, low, (line) => {
    widestLineWidth = Math.max(widestLineWidth, line.width);
  });

  return {
    targetLineCount,
    tightWidth: low,
    widestLineWidth: round(widestLineWidth),
  };
};

const buildFlowLayout = (
  prepared: PreparedTextWithSegments,
  columnWidth: number,
  obstacleWidth: number,
  obstacleHeight: number,
  lineHeight: number,
) => {
  let cursor = { segmentIndex: 0, graphemeIndex: 0 };
  let y = 0;

  const lines: FlowLine[] = [];

  while (true) {
    const sitsBesideObstacle = y < obstacleHeight;
    const maxWidth = sitsBesideObstacle
      ? Math.max(120, columnWidth - obstacleWidth - 16)
      : columnWidth;
    const line = layoutNextLine(prepared, cursor, maxWidth);

    if (line === null) {
      break;
    }

    lines.push({
      ...line,
      x: sitsBesideObstacle ? obstacleWidth + 16 : 0,
      y,
      maxWidth,
    });

    cursor = line.end;
    y += lineHeight;
  }

  return {
    height: Math.max(y, obstacleHeight),
    lines,
  } satisfies FlowLayoutResult;
};

type LinesPreviewProps = {
  title: string;
  subtitle: string;
  lines: LayoutLine[];
  lineHeight: number;
  preserveWhitespace?: boolean;
};

const LinesPreview: FC<LinesPreviewProps> = ({
  title,
  subtitle,
  lines,
  lineHeight,
  preserveWhitespace = false,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region logic functions start
  const whiteSpace = preserveWhitespace ? "pre-wrap" : "normal";
  // #endregion logic functions end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <Card className="h-full">
      <Space className="w-full" direction="vertical" size="middle">
        <div>
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Paragraph type="secondary">
            {subtitle}
          </Typography.Paragraph>
        </div>

        <div className="rounded-2xl border border-black/8 bg-white p-4 shadow-[0_16px_40px_rgba(17,24,39,0.06)]">
          {lines.map((line, index) => {
            return (
              <div
                key={`${title}-${index}-${line.start.segmentIndex}-${line.end.segmentIndex}`}
                className="mb-2 rounded-xl bg-slate-50 px-3 py-2 last:mb-0"
                style={{ lineHeight: `${lineHeight}px`, whiteSpace }}
              >
                <div className="mb-1 text-[11px] tracking-[0.18em] text-slate-400 uppercase">
                  Line {index + 1} · {round(line.width)}px
                </div>
                <div className="text-[15px] text-slate-800">
                  {preserveWhitespace
                    ? toVisibleWhitespace(line.text)
                    : line.text}
                </div>
              </div>
            );
          })}
        </div>
      </Space>
    </Card>
  );
  // #endregion render functions end
};

type BubblePreviewProps = {
  label: string;
  caption: string;
  width: number;
  lineHeight: number;
  lines: LayoutLine[];
  accent: string;
};

const BubblePreview: FC<BubblePreviewProps> = ({
  label,
  caption,
  width,
  lineHeight,
  lines,
  accent,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region logic functions start
  // #endregion logic functions end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <div className="rounded-[28px] border border-black/8 bg-white p-4 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-900">{label}</div>
          <div className="text-xs text-slate-500">{caption}</div>
        </div>
        <Tag color={accent}>{width}px</Tag>
      </div>

      <div className="rounded-3xl bg-slate-100 p-4">
        <div
          className="rounded-[20px] px-4 py-3 text-[15px] text-slate-900"
          style={{
            width,
            maxWidth: "100%",
            background: accent === "blue" ? "#dbeafe" : "#dcfce7",
            lineHeight: `${lineHeight}px`,
          }}
        >
          {lines.map((line, index) => {
            return (
              <div
                key={`${label}-${index}-${line.start.segmentIndex}-${line.end.segmentIndex}`}
              >
                {line.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  // #endregion render functions end
};

type FlowPreviewProps = {
  flowLayout: FlowLayoutResult;
  obstacleWidth: number;
  obstacleHeight: number;
  columnWidth: number;
  lineHeight: number;
};

const FlowPreview: FC<FlowPreviewProps> = ({
  flowLayout,
  obstacleWidth,
  obstacleHeight,
  columnWidth,
  lineHeight,
}) => {
  // #region hooks start
  // #endregion hooks end

  // #region logic functions start
  const containerHeight = flowLayout.height + lineHeight;
  // #endregion logic functions end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <Card className="h-full">
      <Space className="w-full" direction="vertical" size="middle">
        <div>
          <Typography.Title level={4}>Demo 3 · layoutNextLine</Typography.Title>
          <Typography.Paragraph type="secondary">
            每一行都可以拥有不同的可用宽度，所以文本能绕开图片、图标或任意障碍物。
          </Typography.Paragraph>
        </div>

        <div className="overflow-x-auto rounded-[28px] border border-black/8 bg-[#f7f4ef] p-4">
          <div
            className="relative rounded-3xl bg-white p-4 shadow-[0_20px_44px_rgba(51,65,85,0.08)]"
            style={{
              height: containerHeight,
              minWidth: columnWidth + 32,
              width: columnWidth + 32,
            }}
          >
            <div
              className="absolute top-4 left-4 rounded-[20px] border border-dashed border-amber-400 bg-amber-100 px-3 py-2 text-xs font-medium tracking-[0.18em] text-amber-800 uppercase"
              style={{ height: obstacleHeight, width: obstacleWidth }}
            >
              Floating shape
            </div>

            {flowLayout.lines.map((line, index) => {
              return (
                <div
                  key={`flow-${index}-${line.start.segmentIndex}-${line.end.segmentIndex}`}
                  className="absolute rounded-lg bg-slate-50 px-2 text-[15px] text-slate-800"
                  style={{
                    left: line.x + 16,
                    lineHeight: `${lineHeight}px`,
                    top: line.y + 16,
                    width: line.width,
                  }}
                >
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>
      </Space>
    </Card>
  );
  // #endregion render functions end
};

type PretextPageProps = unknown;

const PretextPage: FC<PretextPageProps> = () => {
  // #region hooks start
  const [sourceText, setSourceText] = useState(
    "Pretext 把文本测量拆成 prepare 和 layout 两段。你可以先把一段文字准备好，再在窗口缩放、虚拟列表重排、聊天气泡收缩时只跑纯算术布局。\n\n这段文本混合 English、中文、العربية 和 emoji 🚀，用来观察多语言换行效果很合适。",
  );
  const [localeMode, setLocaleMode] = useState<LocaleMode>("auto");
  const [maxWidth, setMaxWidth] = useState(320);
  const [lineHeight, setLineHeight] = useState(defaultLineHeight);
  const [whiteSpaceMode, setWhiteSpaceMode] =
    useState<WhiteSpaceMode>("normal");
  const deferredText = useDeferredValue(sourceText);
  // #endregion hooks end

  // #region logic functions start
  const prepared = useMemo(() => {
    return prepare(deferredText, fontShorthand, { whiteSpace: whiteSpaceMode });
  }, [deferredText, localeMode, whiteSpaceMode]);

  const preparedWithSegments = useMemo(() => {
    return prepareWithSegments(deferredText, fontShorthand, {
      whiteSpace: whiteSpaceMode,
    });
  }, [deferredText, localeMode, whiteSpaceMode]);

  const currentLayout = useMemo(() => {
    return layout(prepared, maxWidth, lineHeight);
  }, [lineHeight, maxWidth, prepared]);

  const currentLines = useMemo(() => {
    return layoutWithLines(preparedWithSegments, maxWidth, lineHeight);
  }, [lineHeight, maxWidth, preparedWithSegments]);

  const widthSnapshots = useMemo(() => {
    const widths = Array.from(new Set([180, maxWidth, 440]));

    return widths.map((width) => {
      const result = layout(prepared, width, lineHeight);

      return {
        width,
        height: round(result.height),
        lineCount: result.lineCount,
      } satisfies WidthSnapshot;
    });
  }, [lineHeight, maxWidth, prepared]);

  const bubbleMaxWidth = useMemo(() => {
    return Math.min(420, Math.max(240, maxWidth + 60));
  }, [maxWidth]);

  const plainBubbleLayout = useMemo(() => {
    return layoutWithLines(preparedWithSegments, bubbleMaxWidth, lineHeight);
  }, [bubbleMaxWidth, lineHeight, preparedWithSegments]);

  const shrinkMetrics = useMemo(() => {
    return findTightWidth(preparedWithSegments, bubbleMaxWidth);
  }, [bubbleMaxWidth, preparedWithSegments]);

  const shrinkBubbleLayout = useMemo(() => {
    return layoutWithLines(
      preparedWithSegments,
      shrinkMetrics.tightWidth,
      lineHeight,
    );
  }, [lineHeight, preparedWithSegments, shrinkMetrics.tightWidth]);

  const whitespaceNormalLines = useMemo(() => {
    const preparedWhitespace = prepareWithSegments(
      whitespaceDemoText,
      fontShorthand,
      {
        whiteSpace: "normal",
      },
    );

    return layoutWithLines(preparedWhitespace, 320, lineHeight);
  }, [lineHeight, localeMode]);

  const whitespacePreWrapLines = useMemo(() => {
    const preparedWhitespace = prepareWithSegments(
      whitespaceDemoText,
      fontShorthand,
      {
        whiteSpace: "pre-wrap",
      },
    );

    return layoutWithLines(preparedWhitespace, 320, lineHeight);
  }, [lineHeight, localeMode]);

  const flowLayout = useMemo(() => {
    return buildFlowLayout(
      preparedWithSegments,
      520,
      146,
      lineHeight * 4,
      lineHeight,
    );
  }, [lineHeight, preparedWithSegments]);
  // #endregion logic functions end

  // #region useEffect functions start
  useEffect(() => {
    return () => {
      clearCache();
      setLocale(undefined);
    };
  }, []);
  // #endregion useEffect functions end

  // #region render functions start
  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(253,230,138,0.55),transparent_24%),linear-gradient(180deg,#fffaf1_0%,#f8fbff_42%,#eef6ff_100%)] px-4 py-8 md:px-8"
      style={{ fontFamily: fontFamilyCss }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Card className="overflow-hidden border-0 bg-white/85 shadow-[0_26px_70px_rgba(30,41,59,0.10)] backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4">
              <Tag color="geekblue">@chenglou/pretext</Tag>
              <Typography.Title className="mb-0! text-[34px]! leading-[1.1]!">
                一个专门做多行文本测量与布局的底层引擎
              </Typography.Title>
              <Typography.Paragraph className="mb-0! text-[16px]! text-slate-600">
                它不替你渲染
                UI，而是把“文本有多高、会断成几行、每一行从哪里到哪里”算出来。适合虚拟列表、聊天气泡、Canvas/SVG
                文本绘制，以及任何不想用 DOM 测量去触发布局回流的场景。
              </Typography.Paragraph>
              <Space size={[8, 8]} wrap>
                {featureTags.map((item) => {
                  return <Tag key={item}>{item}</Tag>;
                })}
              </Space>
            </div>

            <div className="rounded-[28px] bg-slate-950 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-4 text-xs tracking-[0.24em] text-slate-400 uppercase">
                Core APIs
              </div>
              <div className="space-y-3 text-sm text-slate-200">
                <div>
                  <div className="font-semibold text-white">
                    prepare + layout
                  </div>
                  <div>测高、算行数，适合 resize 和虚拟列表。</div>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    prepareWithSegments + layoutWithLines
                  </div>
                  <div>拿到每一行的文本和宽度，适合 Canvas / SVG。</div>
                </div>
                <div>
                  <div className="font-semibold text-white">walkLineRanges</div>
                  <div>不构建字符串，适合做二分搜索和 shrink-wrap。</div>
                </div>
                <div>
                  <div className="font-semibold text-white">layoutNextLine</div>
                  <div>逐行指定可用宽度，适合绕排和不规则版心。</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-0 bg-white/80 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <Row gutter={[16, 16]}>
            <Col span={24} lg={12}>
              <Space className="w-full" direction="vertical" size="middle">
                <Typography.Title level={4}>
                  Interactive Playground
                </Typography.Title>
                <Input.TextArea
                  autoSize={{ minRows: 7, maxRows: 10 }}
                  className="font-mono"
                  value={sourceText}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                    setSourceText(event.target.value);
                  }}
                />
              </Space>
            </Col>

            <Col span={24} lg={12}>
              <Space className="w-full" direction="vertical" size="large">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography.Text>Width</Typography.Text>
                    <Typography.Text type="secondary">
                      {maxWidth}px
                    </Typography.Text>
                  </div>
                  <Slider
                    min={160}
                    max={520}
                    value={maxWidth}
                    onChange={setMaxWidth}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography.Text>Line Height</Typography.Text>
                    <Typography.Text type="secondary">
                      {lineHeight}px
                    </Typography.Text>
                  </div>
                  <Slider
                    min={18}
                    max={34}
                    value={lineHeight}
                    onChange={setLineHeight}
                  />
                </div>

                <Row gutter={[12, 12]}>
                  <Col span={24} md={12}>
                    <div className="mb-2 text-sm text-slate-600">
                      whiteSpace
                    </div>
                    <Select
                      className="w-full"
                      options={[
                        { label: "normal", value: "normal" },
                        { label: "pre-wrap", value: "pre-wrap" },
                      ]}
                      value={whiteSpaceMode}
                      onChange={(value: WhiteSpaceMode) => {
                        setWhiteSpaceMode(value);
                      }}
                    />
                  </Col>

                  <Col span={24} md={12}>
                    <div className="mb-2 text-sm text-slate-600">locale</div>
                    <Select
                      className="w-full"
                      options={[
                        { label: "auto", value: "auto" },
                        { label: "en", value: "en" },
                        { label: "zh", value: "zh" },
                        { label: "ja", value: "ja" },
                      ]}
                      value={localeMode}
                      onChange={(value: LocaleMode) => {
                        setLocale(value === "auto" ? undefined : value);
                        setLocaleMode(value);
                      }}
                    />
                  </Col>
                </Row>
              </Space>
            </Col>
          </Row>
        </Card>

        <Row gutter={[16, 16]}>
          <Col span={24} xl={10}>
            <Card className="h-full">
              <Space className="w-full" direction="vertical" size="middle">
                <div>
                  <Typography.Title level={4}>
                    Demo 1 · prepare + layout
                  </Typography.Title>
                  <Typography.Paragraph type="secondary">
                    同一份 prepared text
                    可以被重复拿去计算不同宽度下的高度，适合把 prepare
                    放在一次性阶段，把 layout 放在高频 resize 热路径。
                  </Typography.Paragraph>
                </div>

                <Row gutter={[12, 12]}>
                  {widthSnapshots.map((item) => {
                    return (
                      <Col key={item.width} span={24} md={8} xl={24}>
                        <Card className="rounded-2xl bg-slate-50" size="small">
                          <Statistic
                            title={`Width ${item.width}px`}
                            value={item.height}
                            precision={1}
                            suffix="px"
                          />
                          <div className="mt-2 text-sm text-slate-500">
                            {item.lineCount} lines
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>

                <div className="rounded-2xl bg-slate-950 p-4 text-white">
                  <div className="mb-2 text-xs tracking-[0.18em] text-slate-400 uppercase">
                    Current measurement
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div>
                      <div className="text-[28px] font-semibold">
                        {round(currentLayout.height)}px
                      </div>
                      <div className="text-sm text-slate-400">
                        Predicted height
                      </div>
                    </div>
                    <div>
                      <div className="text-[28px] font-semibold">
                        {currentLayout.lineCount}
                      </div>
                      <div className="text-sm text-slate-400">Line count</div>
                    </div>
                    <div>
                      <div className="text-[28px] font-semibold">
                        {preparedWithSegments.segments.length}
                      </div>
                      <div className="text-sm text-slate-400">
                        Prepared segments
                      </div>
                    </div>
                  </div>
                </div>
              </Space>
            </Card>
          </Col>

          <Col span={24} xl={14}>
            <LinesPreview
              lineHeight={lineHeight}
              lines={currentLines.lines}
              subtitle="layoutWithLines 会把每一行的文本和精确宽度都给你，方便你自己渲染。"
              title="Current line breakdown"
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24} xl={12}>
            <Card className="h-full">
              <Space className="w-full" direction="vertical" size="middle">
                <div>
                  <Typography.Title level={4}>
                    Demo 2 · walkLineRanges
                  </Typography.Title>
                  <Typography.Paragraph type="secondary">
                    先用一个较宽的最大宽度拿到目标行数，再二分出“保持同样行数的最小宽度”，这就是
                    shrink-wrap multiline bubble 的关键。
                  </Typography.Paragraph>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <Card className="rounded-2xl bg-slate-50" size="small">
                    <Statistic
                      title="Max width"
                      value={bubbleMaxWidth}
                      suffix="px"
                    />
                  </Card>
                  <Card className="rounded-2xl bg-slate-50" size="small">
                    <Statistic
                      title="Tight width"
                      value={shrinkMetrics.tightWidth}
                      suffix="px"
                    />
                  </Card>
                  <Card className="rounded-2xl bg-slate-50" size="small">
                    <Statistic
                      title="Saved width"
                      value={bubbleMaxWidth - shrinkMetrics.tightWidth}
                      suffix="px"
                    />
                  </Card>
                </div>

                <div className="text-sm text-slate-500">
                  Widest computed line: {shrinkMetrics.widestLineWidth}px ·
                  Target line count: {shrinkMetrics.targetLineCount}
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <BubblePreview
                    accent="blue"
                    caption="Only constrained by max-width"
                    label="Plain bubble"
                    lineHeight={lineHeight}
                    lines={plainBubbleLayout.lines}
                    width={bubbleMaxWidth}
                  />
                  <BubblePreview
                    accent="green"
                    caption="Binary-searched with walkLineRanges"
                    label="Pretext bubble"
                    lineHeight={lineHeight}
                    lines={shrinkBubbleLayout.lines}
                    width={shrinkMetrics.tightWidth}
                  />
                </div>
              </Space>
            </Card>
          </Col>

          <Col span={24} xl={12}>
            <FlowPreview
              columnWidth={520}
              flowLayout={flowLayout}
              lineHeight={lineHeight}
              obstacleHeight={lineHeight * 4}
              obstacleWidth={146}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24} xl={8}>
            <Card className="h-full">
              <Space className="w-full" direction="vertical" size="middle">
                <Typography.Title level={4}>
                  Demo 4 · whiteSpace
                </Typography.Title>
                <Typography.Paragraph type="secondary">
                  `pre-wrap` 会保留普通空格、tab 和换行；默认 `normal`
                  会先折叠空白再布局。
                </Typography.Paragraph>
                <div className="rounded-2xl bg-slate-950 p-4 font-mono text-[13px] whitespace-pre-wrap text-slate-100">
                  {toVisibleWhitespace(whitespaceDemoText)}
                </div>
              </Space>
            </Card>
          </Col>

          <Col span={24} xl={8}>
            <LinesPreview
              lineHeight={lineHeight}
              lines={whitespaceNormalLines.lines}
              preserveWhitespace
              subtitle="空白会被折叠，行文本更像普通 HTML 段落。"
              title="whiteSpace: normal"
            />
          </Col>

          <Col span={24} xl={8}>
            <LinesPreview
              lineHeight={lineHeight}
              lines={whitespacePreWrapLines.lines}
              preserveWhitespace
              subtitle="空格、tab、换行都进入测量结果，更接近 textarea 行为。"
              title="whiteSpace: pre-wrap"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
  // #endregion render functions end
};

export type { PretextPageProps };
export { PretextPage };
