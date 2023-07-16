import Link from "next/link";
import React from "react";
import styles from "./trans_info_box.module.scss";
import { RateText } from "components/text";

interface Props {
  rateValue?: number;
  periodText?: string;
  transType: "Money in" | "Money out" | "Pending";
  transAmount: string;
}

export const TransInfoBox: React.FC<Props> = (props) => {
  const { periodText, rateValue, transType, transAmount } = props;

  const getColor = () => {
    switch (transType) {
      case "Money in":
        return "in";

      case "Money out":
        return "out";

      case "Pending":
        return "pending";
    }
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.transType} ${styles[getColor()]}`}>
        {transType}
      </div>

      <div className={styles.info}>
        <div className={styles.valueText}>${transAmount}</div>
        {periodText && rateValue && (
          <RateText rateValue={rateValue} periodText={periodText} tiny />
        )}
      </div>
    </div>
  );
};

export default TransInfoBox;
