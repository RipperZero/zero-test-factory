import { CSSProperties, FC, ReactNode } from "react";

import { Layout } from "antd";

const headerStyle: CSSProperties = {
  backgroundColor: "white",
  height: 64,
};

const contentStyle: CSSProperties = {
  minHeight: 120,
};

const footerStyle: CSSProperties = {
  height: 40,
};

type BaseLayoutProps = {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ header, content, footer }) => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Layout>
      <Layout.Header style={headerStyle}>{header ?? "Header"}</Layout.Header>
      <Layout.Content style={contentStyle}>
        {content ?? "Content"}
      </Layout.Content>
      <Layout.Footer style={footerStyle}>{footer ?? "Footer"}</Layout.Footer>
    </Layout>
  );
  // #endregion render functions end
};

export { BaseLayout };
