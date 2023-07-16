import AuthWrapper from "comps/wrapper/auth";
import React from "react";
import OrdersView from "views/orders";

export default function Dash() {
  return (
    <AuthWrapper>
      <OrdersView />
    </AuthWrapper>
  );
}
