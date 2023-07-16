import AuthWrapper from "comps/wrapper/auth";
import React from "react";
import UserView from "views/users";

export default function Dash() {
  return (
    <AuthWrapper>
      <UserView />
    </AuthWrapper>
  );
}
