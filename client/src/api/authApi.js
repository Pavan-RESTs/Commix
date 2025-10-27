import apiClient from "../services/axiosClient";
import { authEndpoints } from "../constants/api-endpoints";

export const authApi = {
  login: async (credentails) => {
    const response = await apiClient.post(authEndpoints.login, credentails);
    return response;
  },

  register: async (credentails) => {
    const response = await apiClient.post(authEndpoints.register, credentails);
    return response;
  },

  logout: async () => {
    const response = await apiClient.get(authEndpoints.logout);
    return response;
  },

  validate: async () => {
    const response = await apiClient.post(authEndpoints.validate);
    return response;
  },
};
