import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const user = useSelector((state) => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/signup" />;
};

export default Auth;
