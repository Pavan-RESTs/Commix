import { authApi } from "../api/authApi";

export const authService = {
  login: async (credentials) => {
    const { data } = await authApi.login(credentials);
    localStorage.setItem("jwtToken", data.jwtToken);
    return data;
  },

  register: async (credentials) => {
    const { data } = await authApi.register(credentials);
    return data;
  },

  logout: async () => {
    const { data } = await authApi.logout();
    localStorage.removeItem("jwtToken");
    return data;
  },
};
