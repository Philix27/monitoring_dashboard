import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import styles from "./custom_modal.module.scss";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<Props> = ({ isOpen, handleClose, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => handleClose()}
      className={styles.dialog}
    >
      <Dialog.Panel className={styles.panel}>{children}</Dialog.Panel>
    </Dialog>
  );
};

export default ModalWrapper;
