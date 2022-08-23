import { getRequest, updateRequest } from "../lib/axios";
import { BaseUrl } from "../utils/env.constant";

export const getSongs = () => {
  return getRequest(`${BaseUrl}/api/songs/`);
};

export const getCollections = () => {
  return getRequest(`${BaseUrl}/api/collections/`);
};

export const getSelectedCollections = () => {
  return getRequest(`${BaseUrl}/api/collections/selected`);
};

export const selectCollection = (id) => {
  return updateRequest(`${BaseUrl}/api/collections/select?id=${id}`);
};

export const getCollectionById = (id) => {
  return getRequest(`${BaseUrl}/api/collections/${id}`);
};
