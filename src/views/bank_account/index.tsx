import React, { useState } from "react";
import BaseWrapper from "../../comps/wrapper";
import styles from "./banking.module.scss";
import { IconButton, PrimaryIconButton } from "components/buttons";
import { IoCafeSharp, IoSettings } from "react-icons/io5";
import { SearchBar } from "./accounts/searchbar";
import DoowAccount from "./accounts";

type ActiveStates = "DOOW" | "EXTERNAL" | "WORKFLOW" | "PERMISSION";
export default function BankAccountView() {
  const [activeTab, setActiveTab] = useState<ActiveStates>("DOOW");

  return (
    <BaseWrapper>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          {/* {SearchBar()} */}
          <div className={styles.title_section}>
            <h3>Account</h3>
            <div>
              <IconButton title="Manage accounts" icon={<IoCafeSharp />} />
              <PrimaryIconButton title="Move money" icon={<IoCafeSharp />} />
            </div>
          </div>
          <div className={styles.tabs_section}>
            <div className={styles.tab}>
              <div
                className={
                  activeTab == "DOOW" ? styles.active_tab_item : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("DOOW");
                }}
              >
                <p>Doow accounts</p>
              </div>
              <div
                className={
                  activeTab == "EXTERNAL"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("EXTERNAL");
                }}
              >
                <p>External accounts</p>
              </div>
              <div
                className={
                  activeTab == "WORKFLOW"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("WORKFLOW");
                }}
              >
                <p>Workflows & automation</p>
              </div>
              <div
                className={
                  activeTab == "PERMISSION"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("PERMISSION");
                }}
              >
                <p>Permissions</p>
              </div>
            </div>
            <hr />
          </div>
          {/* <DoowAccount /> */}
          {getActiveSection(activeTab)}
        </div>
      </div>
    </BaseWrapper>
  );
}

function getActiveSection(state: ActiveStates): JSX.Element {
  switch (state) {
    case "DOOW":
      return <DoowAccount />;
      break;
    case "EXTERNAL":
      return <DoowAccount />;
      break;
    case "PERMISSION":
      return <DoowAccount />;
      break;
    case "WORKFLOW":
      return <DoowAccount />;
      break;
    default:
      return <DoowAccount />;
      break;
  }
}
