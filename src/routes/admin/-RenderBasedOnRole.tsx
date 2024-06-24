import { useUserData } from "@/api/auth";
import { Navigate } from "@tanstack/react-router";
import React from "react";
import PageNotFoundComponent from "../-PageNotFoundComponent";

type RenderBasedOnRoleProps = {
  adminComponent?: React.ReactNode;
  staffComponent?: React.ReactNode;
  undefinedUserComponent?: React.ReactNode;
};

export default function RenderBasedOnRole({
  adminComponent,
  staffComponent,
  undefinedUserComponent,
}: RenderBasedOnRoleProps) {
  const { data: userData, isLoading } = useUserData();

  if (isLoading) {
    return (
      <div className="grid h-screen text-3xl place-items-center font-poppins text-main_primary">
        Checking credentials...
      </div>
    );
  }

  if (userData) {
    if (userData.authorities[0].authority === "ROLE_ADMIN") {
      return !adminComponent ? <PageNotFoundComponent/> : adminComponent;
    }
    return !staffComponent ? <PageNotFoundComponent/> : staffComponent;
  }

  return undefinedUserComponent ? (
    undefinedUserComponent
  ) : (
    <Navigate to="/admin/login" />
  );
}
