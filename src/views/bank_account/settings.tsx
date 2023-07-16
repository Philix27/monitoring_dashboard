import React from "react";
import BaseWrapper from "../../comps/wrapper";
import styles from "./banking.module.scss";
import Link from "next/link";
import { AppUrlManager } from "../../app_url";

export default function BankAccountSettingsView() {
  return (
    <BaseWrapper>
      <div className={styles.container}>
        <h2>Banking Settings</h2>
      </div>
    </BaseWrapper>
  );
}
