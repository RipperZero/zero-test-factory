import { GetUsersResObj } from "@api.mockAPI";

import { axiosInstance } from "@/shared/utils/axiosInstance";

axiosInstance.defaults.baseURL =
  "https://6643258f3c01a059ea21adf8.mockapi.io/api";

const getUsersManager = () => {
  const abortControllerMap = new Map<number, AbortController>();

  const getUsers = () => {
    const timeStamp = new Date().getTime();
    const abortController = new AbortController();
    abortControllerMap.set(timeStamp, abortController);

    return axiosInstance
      .get<GetUsersResObj, GetUsersResObj>("/users", undefined, {
        signal: abortController.signal,
      })
      .finally(() => {
        // remove abortController from the map once the request is complete
        abortControllerMap.delete(timeStamp);
      });
  };

  const abortGetUsers = () => {
    abortControllerMap.forEach((abortController) => {
      abortController.abort();
    });

    // clean up after aborting
    abortControllerMap.clear();
  };

  return { getUsers, abortGetUsers };
};

const { getUsers, abortGetUsers } = getUsersManager();
export { getUsers, abortGetUsers };
