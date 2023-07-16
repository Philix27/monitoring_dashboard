import AuthWrapper from "comps/wrapper/auth";
import React from "react";
import DashboardView from "views/dashboard";

export default function Dash() {
  return (
    <AuthWrapper>
      <DashboardView />
    </AuthWrapper>
  );
}
