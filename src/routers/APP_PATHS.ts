const BASEURL = "/";

const APP_PATHS = {
  ROOT: BASEURL,

  /** TEMPLATE */
  TEMPLATE: `${BASEURL}template`,

  ANTD: `${BASEURL}antd`,

  SEGMENT: `${BASEURL}segment`,

  TAILWIND: `${BASEURL}tailwind`,

  REACTSPRING: `${BASEURL}react-spring`,
} as const;

export { APP_PATHS };
