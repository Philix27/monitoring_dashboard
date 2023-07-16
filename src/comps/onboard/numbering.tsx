import React from "react";
import styles from "./button_wrapper.module.scss";

interface Props {
  value: string | number;
}

export const Numbering: React.FC<Props> = ({ value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>{value}</p>
    </div>
  );
};

export default Numbering;
