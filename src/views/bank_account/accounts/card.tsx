import React from "react";
import Image from "next/image";
import styles from "../banking.module.scss";
import { IconButton } from "components/buttons";
import { IoCafeSharp, IoSettings } from "react-icons/io5";
import { ArrowDownLeftIcon, FlagIcon } from "@heroicons/react/20/solid";
import { FaAddressCard } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import AvatarGroup from "components/avatar/avatar-group";

const profileUrls = ["/assets/flags/usa.svg", "/assets/flags/usa.svg"];
export function AccountCard() {
  return (
    <div className={styles.card}>
      <div className={styles.top_icons}>
        <div>
          <Image
            src={"/assets/flags/usa.svg"}
            width={32}
            height={20}
            alt="country-flag"
          />
          <p>Doow Holdings Inc.</p>
        </div>
        <AvatarGroup imageUrls={profileUrls} />
      </div>
      <div className={styles.balance}>
        <p>BALANCE</p>
        <h3>$340,000.00</h3>
        <p>+27% in the last 7days</p>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.icons_row}>
          <div className={styles.icon}>
            <FaAddressCard />
          </div>
          <div className={styles.icon}>
            <FaAddressCard />
          </div>
          <div className={styles.icon}>
            <FaAddressCard />
          </div>
          <div className={styles.icon}>
            <IoSettings />
          </div>
        </div>
        <div>
          <IconButton title="More options" icon={<MdMore />} />
        </div>
      </div>
    </div>
  );
}
