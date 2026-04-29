const BASEURL = "/";

const APP_PATHS = {
  ROOT: BASEURL,

  /** TEMPLATE */
  TEMPLATE: `${BASEURL}template`,

  ANTD: `${BASEURL}antd`,

  SEGMENT: `${BASEURL}segment`,

  TAILWIND: `${BASEURL}tailwind`,

  REACT_SPRING: `${BASEURL}react-spring`,

  SHOW: `${BASEURL}show`,

  PRETEXT: `${BASEURL}pretext`,

  PRETEXT_COSMIC: `${BASEURL}pretext-cosmic`,

  UPLOAD: `${BASEURL}upload`,

  GRAPH_QL: `${BASEURL}graphql`,
} as const;

export { APP_PATHS };
