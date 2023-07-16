import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/20/solid";
import styles from "./menu_select.module.css";

export interface ISelectOption {
  id: string | number;
  value: string;
}

interface Props {
  borderRadius?: number;
  options: ISelectOption[];
  showIcon?: boolean;
  transparent?: boolean;
  textStyle?: string;
  iconStyle?: string;
}

export const MenuSelect: React.FC<Props> = (props) => {
  const { borderRadius, options, showIcon, transparent, textStyle, iconStyle } =
    props;
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (value: ISelectOption) => {
    setSelected(value);
  };

  return (
    <div className={`${styles.container}`}>
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button
            className={({ open }) =>
              `${styles.box_button_default} ${textStyle} ${
                transparent ? styles.bg_transparent : ""
              } ${
                open
                  ? `${
                      transparent ? styles.border_none : styles.box_button_open
                    }`
                  : styles.box_button_close
              }`
            }
          >
            {showIcon && (
              <CalendarIcon className={`${styles.icon}`} aria-hidden="true" />
            )}
            <span className={`${styles.selected_text}`}>{selected.value}</span>
            <span className={`${styles.icon_wrapper}`}>
              <ChevronDownIcon
                className={`w-6 h-6 text-tertiary-1000 ${iconStyle}`}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={styles.box_options}>
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer text-[13px] select-none py-[12px] px-[8px] ${
                      active ? "bg-background-300" : "text-gray-900"
                    } `
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block ${
                          selected ? "font-medium" : "font-normal text-gray-700"
                        }`}
                      >
                        {option.value}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default MenuSelect;
