import React, { ChangeEvent, useState } from "react";
import styles from "./text-input.module.scss";
import { BiSearch } from "react-icons/bi";

interface Props {
  value?: number | string;
  placeholder: string;
  error?: string;

  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AccountTextInput(props) {
  const { value, handleChange, placeholder, error } = props;

  return (
    <div className={styles.container}>
      <BiSearch />
      <input
        // value={value}
        // onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
