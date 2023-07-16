import React, { useState } from "react";
import BaseWrapper from "../../comps/wrapper";
import styles from "./styles.module.scss";

import AccountInfos, { getUserCard } from "./info";
import UserPerformance from "./chart";

type ActiveStates = "INFO" | "PERFORMANCE";
export default function UserView() {
  const [activeTab, setActiveTab] = useState<ActiveStates>("INFO");

  return (
    <BaseWrapper>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.title_section}>
            <h3>Employee</h3>
          </div>
          <div className={styles.tabs_section}>
            <div className={styles.tab}>
              <div
                className={
                  activeTab == "INFO" ? styles.active_tab_item : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("INFO");
                }}
              >
                <p>Info</p>
              </div>
              <div
                className={
                  activeTab == "PERFORMANCE"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("PERFORMANCE");
                }}
              >
                <p>Performance</p>
              </div>
            </div>
            <hr />
          </div>
          {getActiveSection(activeTab)}
        </div>
      </div>
    </BaseWrapper>
  );
}

function getActiveSection(state: ActiveStates): JSX.Element {
  switch (state) {
    case "INFO":
      return <AccountInfos />;
      break;
    case "PERFORMANCE":
      return <UserPerformance />;
      break;
    default:
      return <AccountInfos />;
      break;
  }
}
