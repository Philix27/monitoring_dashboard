import BaseWrapper from "comps/wrapper";
import { useAppSelector } from "redux/hooks";

import styles from "./styles.module.scss";
import React from "react";

export default function CompanyCardsView() {
  return (
    <BaseWrapper>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <h2>Company Cards</h2>
          {Items({ n1: "Wallet name", n2: "Country" })}
        </div>
      </div>
    </BaseWrapper>
  );

  function Items(params: { n1: string; n2: string }) {
    return (
      <div className={styles.list_item}>
        <p>{params.n2}</p>
        <p>{params.n2}</p>
      </div>
    );
  }
}
