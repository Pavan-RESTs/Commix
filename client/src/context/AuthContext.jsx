import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const { data } = await authApi.login(credentials);
    localStorage.setItem("jwtToken", data.jwtToken);
    setIsAuthenticated(true);
    setUser({ username: data.username });
    return data;
  };

  const register = async (credentials) => {
    const { data } = await authApi.register(credentials);
    return data;
  };

  const logout = async () => {
    const { data } = await authApi.logout();
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    setUser(null);
    return data;
  };

  const validate = async () => {
    const { data } = await authApi.validate();
    return data;
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      setLoading(false);
      return;
    }

    const validation = async () => {
      try {
        const data = await validate();
        setUser({ username: data.username });
        setIsAuthenticated(true);
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    validation();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        loading,
        login,
        register,
        logout,
        validate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
