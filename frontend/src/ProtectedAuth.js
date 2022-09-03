import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";




const ProtectedAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return !isLogged ? <Outlet /> : <Navigate to="/"/>;
};

export default ProtectedAuth;
