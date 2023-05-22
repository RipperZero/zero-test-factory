import { FindAllUserResObj } from "@api.testFactory";
import { axiosInstance } from "shared/utils/axiosInstance";

const findAllUser = () => {
  return axiosInstance.get<FindAllUserResObj>("/findAllUser");
};

export { findAllUser };
