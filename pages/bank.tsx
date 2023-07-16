import AuthWrapper from "comps/wrapper/auth";
import React from "react";
import BankAccountView from "views/bank_account";

export default function BankAccount() {
  return (
    <AuthWrapper>
      <BankAccountView />
    </AuthWrapper>
  );
}
