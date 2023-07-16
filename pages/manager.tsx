import AuthWrapper from "comps/wrapper/auth";
import React from "react";
import DashboardView from "views/dashboard";
import POSView from "views/pos";

export default function Dash() {
  return (
    <AuthWrapper>
      <POSView />
    </AuthWrapper>
  );
}
