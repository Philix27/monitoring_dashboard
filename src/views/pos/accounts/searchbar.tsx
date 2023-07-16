import { BsLightbulb } from "react-icons/bs";
import styles from "../banking.module.scss";
import { ChangeEvent } from "react";
import AccountTextInput from "views/components/text-input";

export const SearchBar = () => (
  <div className={styles.search_section}>
    <div></div>
    <div className={styles.input_field}>
      <AccountTextInput
        placeholder={"Search accounts, wallets, cards & more"}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {}}
      />
    </div>
    <div className={styles.theme}>
      <p>Dark Mode</p>
      <BsLightbulb />
    </div>
  </div>
);
