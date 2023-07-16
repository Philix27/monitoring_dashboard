import { ReactNode } from "react";
import { TiGroup } from "react-icons/ti";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsBank, BsBriefcase } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { MdOutlineInventory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { BsBarChartFill, BsCart4 } from "react-icons/bs";
import { AiFillAppstore } from "react-icons/ai";
import { AppLinks } from "../../app_url";

interface ISidebarItem {
  icon: ReactNode;
  title: string;
  link: string;
  callBack?: () => void;
}

export const sideBarItems: ISidebarItem[] = [
  {
    icon: <AiFillAppstore />,
    title: "POS",
    link: AppLinks.pos,
  },
  {
    icon: <BsCart4 />,
    title: "Orders",
    link: AppLinks.orders,
  },
  {
    icon: <TiGroup />,
    title: "Users",
    link: AppLinks.users,
  },
  {
    icon: <BsBarChartFill />,
    title: "Analytics",
    link: AppLinks.analytics,
  },
  {
    icon: <MdOutlineInventory />,
    title: "Inventory",
    link: AppLinks.manager,
  },
  {
    icon: <IoMdSettings />,
    title: "Settings",
    link: AppLinks.settings,
  },
];
