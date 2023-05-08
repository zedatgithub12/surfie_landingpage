import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const tokens = JSON.parse(token);

  return tokens ? children : <Navigate to="/" />;
};
