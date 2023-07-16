import React, { useState } from "react";
import styles from "./wrapper.module.scss";
import { SideBar } from "../sidebar/sidebar";
import NavBar from "comps/navbar/navbar.comp";
import { useAppSelector } from "redux/hooks";
import { SettingsReduxType } from "redux/store";

export default function BaseWrapper(props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);
  const redux_settings = useAppSelector(SettingsReduxType);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <SideBar collapseSidebar={redux_settings.isDarkTheme} />
      <div className={styles.children_container}>
        <NavBar
          collapsible={collapseSidebar}
          setCollapseSidebar={setCollapseSidebar}
        />
        {props.children}
      </div>
    </div>
  );
}
