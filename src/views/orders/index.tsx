import React, { useState } from "react";
import BaseWrapper from "../../comps/wrapper";
import styles from "./banking.module.scss";

type ActiveStates = "PENDING" | "COMPLETED" | "PROCESSING" | "QUEUE";
export default function OrdersView() {
  const [activeTab, setActiveTab] = useState<ActiveStates>("PENDING");

  return (
    <BaseWrapper>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.title_section}>
            <h3>Orders</h3>
            <div>
              <p>Pending: #23,000</p>
              <p>Completed: #23,000</p>
              <p>History: #23,000</p>
              <p>Pending: #23,000</p>
            </div>
          </div>
          <div className={styles.tabs_section}>
            <div className={styles.tab}>
              <div
                className={
                  activeTab == "PENDING"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("PENDING");
                }}
              >
                <p>Pending</p>
              </div>
              <div
                className={
                  activeTab == "COMPLETED"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("COMPLETED");
                }}
              >
                <p>Completed</p>
              </div>
              <div
                className={
                  activeTab == "PROCESSING"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("PROCESSING");
                }}
              >
                <p>Processing</p>
              </div>
              <div
                className={
                  activeTab == "QUEUE"
                    ? styles.active_tab_item
                    : styles.tab_item
                }
                onClick={() => {
                  setActiveTab("QUEUE");
                }}
              >
                <p>Queue</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </BaseWrapper>
  );
}
