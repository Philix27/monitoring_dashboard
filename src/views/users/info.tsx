import { BiSolidUser } from "react-icons/bi";
import styles from "./styles.module.scss";

import React from "react";

export default function AccountInfos() {
  return (
    <>
      {getUserCard({
        name: "Precious",
        last_seen: "27, July",
        role: "Manager",
      })}
      {getUserCard({
        name: "Amaka",
        last_seen: "27, July",
        role: "Manager",
      })}
      {getUserCard({
        name: "Gift",
        last_seen: "27, July",
        role: "Manager",
      })}
    </>
  );
}

interface ICardProps {
  name: string;
  last_seen: string;
  role: string;
}
export function getUserCard(data: ICardProps) {
  return (
    <div className={styles.user_card}>
      <div>
        <BiSolidUser />
        <p>NAME: </p>
      </div>
      <hr />
      <div>
        <p>ROLE: </p>
        <p>Last seen: </p>
      </div>
    </div>
  );
}
