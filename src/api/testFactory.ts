import { FindAllUserResObj, RegisterUserReqParams } from "@api.testFactory";

import { axiosInstance } from "@/shared/utils/axiosInstance";

const findAllUser = () => {
  return axiosInstance.get<FindAllUserResObj>("/findAllUser");
};

const registerUser = (params: RegisterUserReqParams) => {
  return axiosInstance.post<number>("/registerUser", params);
};

export { findAllUser, registerUser };
