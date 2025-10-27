import { AlertProvider } from "./context/AlertContext";
import { AuthProvider } from "./context/AuthContext";

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <AlertProvider>{children}</AlertProvider>
    </AuthProvider>
  );
};
