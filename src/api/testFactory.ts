import { FindAllUserResObj, RegisterUserReqParams } from "@api.testFactory";

import { createAxiosInstance } from "@/shared/utils/createAxiosInstance";

const axiosInstance = createAxiosInstance();

const findAllUser = () => {
  return axiosInstance.get<FindAllUserResObj>("/findAllUser");
};

const registerUser = (params: RegisterUserReqParams) => {
  return axiosInstance.post<number>("/registerUser", params);
};

export { findAllUser, registerUser };
