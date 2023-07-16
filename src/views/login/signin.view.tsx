import type { NextPage } from "next";
import styles from "./login.module.scss";
import { useRouter } from "next/router";
import SignIn from "./signIn";
import { useState } from "react";

export interface IProps {
  onChange: () => void;
}

export const LoginView: NextPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.container}>
          <SignIn />
        </div>
      </div>
    </div>
  );
};
