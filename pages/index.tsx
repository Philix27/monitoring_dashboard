import React from "react";
import MetaHeader from "../src/comps/global/Header";
import { LoginView } from "views/login/signin.view";

export default function HomePage() {
  return (
    <>
      <MetaHeader title={"Doow | Africa's #1 Business Bank for Startups"} />
      <LoginView />
    </>
  );
}
