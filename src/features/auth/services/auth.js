import { PostRequest } from "../../../lib/axios";
import { BaseUrl } from "../../../utils/env.constant";

export const auth = (data) => {
  return PostRequest(`${BaseUrl}/api/auth/login`, data);
};
