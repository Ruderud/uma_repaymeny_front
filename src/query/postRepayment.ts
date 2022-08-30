import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

export const postRepayment = async (param: any) => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${param.token}`,
    },
  };

  try {
    const response = await axiosInstance(config).post("/uma-repayment", param);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
