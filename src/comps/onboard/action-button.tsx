import React from "react";
import styles from "./action-button.module.scss";

interface Props {
  title: string;
  handleClick: () => void;
  isValid?: boolean;
  isValidateRequired?: boolean;
}

export const ActionButton: React.FC<Props> = ({
  handleClick,
  title,
  isValid,
  isValidateRequired,
}) => {
  return (
    <div
      className={`${styles.button_wrapper} ${
        isValidateRequired
          ? isValid && styles.button_wrapper_valid
          : styles.button_wrapper_valid
      }`}
      onClick={handleClick}
    >
      <p>{title}</p>
    </div>
  );
};

export default ActionButton;
