const getBaseURL = () => import.meta.env.BASE_URL;

const getApiServerURL = () => import.meta.env.ENV_API_URL;

const getApiTimeOut = () => {
  const timeout = Number(import.meta.env.ENV_API_TIME_OUT);

  return Number.isNaN(timeout) ? undefined : timeout;
};

export { getBaseURL, getApiServerURL, getApiTimeOut };
