import React from "react";
import { selectIsLogin } from "../App/redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
