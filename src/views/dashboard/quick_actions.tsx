import Link from "next/link";
import React from "react";
import { BsBoxArrowInRight, BsPlusCircle, BsSend } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TfiAngleRight } from "react-icons/tfi";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import styles from "./styles.module.scss";

interface IQuickActionLink {
  title: string;
  link: string;
  icon: JSX.Element;
}

const links: IQuickActionLink[] = [
  { title: "Link external account", link: "#", icon: <BsBoxArrowInRight /> },
  { title: "Create budget", link: "#", icon: <BsPlusCircle /> },
  { title: "Move money", link: "#", icon: <BsSend /> },
  {
    title: "Invite team, beneficiaries & vendors",
    link: "#",
    icon: <AiOutlineUsergroupAdd />,
  },
];

export const QuickActionsLinks = () => {
  return (
    <div className={styles.link_items}>
      {links.map((item, i) => (
        <div key={i.toString()} className={styles.link_item}>
          <Link href={item.link}>
            <div>
              {item.icon}
              <p>{item.title}</p>
            </div>
            <TfiAngleRight />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickActionsLinks;
