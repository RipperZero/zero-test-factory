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

  UPLOAD: `${BASEURL}upload`,

  GRAPH_QL: `${BASEURL}graphql`,
} as const;

export { APP_PATHS };
