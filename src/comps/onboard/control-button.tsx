import React from "react";
import styles from "./button_wrapper.module.scss";
import { MdChevronLeft, MdOutlineClose, MdChevronRight } from "react-icons/md";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  role: "previous" | "next" | "cancel" | "up" | "down";
  handleClick: () => void;
}

export const ControlButton: React.FC<Props> = ({ role, handleClick }) => {
  const getIcon = () => {
    switch (role) {
      case "cancel":
        return <MdOutlineClose className={styles.icon} />;

      case "previous":
        return <MdChevronLeft className={styles.icon} />;

      case "next":
        return <MdChevronRight className={styles.icon} />;

      case "up":
        return <ChevronUpIcon className={styles.icon} />;

      case "down":
        return <ChevronDownIcon className={styles.icon} />;

      default:
        return <MdOutlineClose className={styles.icon} />;
    }
  };

  return (
    <div className={styles.button_container} onClick={handleClick}>
      {getIcon()}
    </div>
  );
};

export default ControlButton;
