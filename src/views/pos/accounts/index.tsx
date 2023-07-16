import React from "react";
import styles from "../banking.module.scss";
import Link from "next/link";
import { BsLightbulb } from "react-icons/bs";
import { IconButton, PrimaryIconButton } from "components/buttons";
import { IoCafeSharp, IoSettings } from "react-icons/io5";
import { ArrowDownLeftIcon, FlagIcon } from "@heroicons/react/20/solid";
import { FaAddressCard } from "react-icons/fa";
import { SearchBar } from "./searchbar";
import { AiFillFilter } from "react-icons/ai";
import { AccountCard } from "./card";
import AccountTextInput from "views/components/text-input";

export default function DoowAccount() {
  return (
    <div>
      <div className={styles.amount_section}>
        <div>
          <p>Total available balance in USD</p>
          <h3>$570,900.00</h3>
        </div>
      </div>
      <div className={styles.buttons_section}>
        <div></div>
        <div>
          <IconButton title="Add filter" icon={<AiFillFilter />} />
          <PrimaryIconButton title="Create account" icon={<AiFillFilter />} />
        </div>
      </div>
      <div className={styles.cards_section}>
        {AccountCard()}
        {AccountCard()}
      </div>
      <div className={styles.table_search_section}>
        <div className={styles.input_field}>
          <AccountTextInput placeholder="Search by beneficiaries, transaction channels, accounts, budgets & more" />
        </div>
        <div className={styles.table_buttons}>
          <IconButton title="Add filter" icon={<IoCafeSharp />} />
          <IconButton title="Last 12 months" icon={<IoCafeSharp />} />
        </div>
      </div>
      <div className={styles.table_section}>
        <table></table>
      </div>
    </div>
  );
}
