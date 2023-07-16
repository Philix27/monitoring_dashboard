import React, { ChangeEvent, useState } from "react";
import styles from "./text-input.module.scss";

interface Props {
  value: number | string;
  placeholder?: string;
  error?: string;

  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = (props) => {
  const { value, handleChange, placeholder, error } = props;

  return (
    <div>
      <div className={styles.container}>
        <input
          value={value}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : ""}
        />
        {!error && value && <img src={"/assets/icons/success-icon.svg"} />}
      </div>
      <p className={styles.error_message}>{error ? error : ""}</p>
    </div>
  );
};

export default TextInput;
