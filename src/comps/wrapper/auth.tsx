// import { AppUrlManager } from "app_url";
// import { useAppSelector } from "redux/hooks";
// import { AuthReduxType } from "redux/store";
import { useRouter } from "next/router";
import React from "react";

export default function AuthWrapper(props) {
  // const activeTab = useAppSelector(AuthReduxType);

  return <>{props.children}</>;
  // const router = useRouter();
  // if (activeTab.tokens.accessToken) {
  // } else {
  //   router.push(AppUrlManager.auth.signup);
  //   return;
  // }
}
