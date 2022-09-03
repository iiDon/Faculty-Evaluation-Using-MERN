import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";




const ProtectedRoutes = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/login"/>;
};

export default ProtectedRoutes;
