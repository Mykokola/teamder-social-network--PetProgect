import React from "react";
import { selectIsLogin } from "../App/redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken } from "../App/redux/auth/taskSlice";
interface RestrictRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
  switherTo: boolean;
}

export const RestrictRoute: React.FC<RestrictRouteProps> = ({
  switherTo,
  component: Component,
  redirectTo = "/",
}) => {
  const dispatch = useDispatch()
  const userAuth = JSON.parse(localStorage.getItem('persist:auth')||'0')
  const token = JSON.parse(userAuth?.token||'0')
 if(token){
  dispatch(setToken(token))
 }

  const authenticated = useSelector(selectIsLogin);
  return switherTo ? (
    !authenticated ? (
      <Navigate to={redirectTo} replace />
    ) : (
      <Component />
    )
  ) : authenticated ? (
    <Navigate to={redirectTo} replace />
  ) : (
    <Component />
  );
};
