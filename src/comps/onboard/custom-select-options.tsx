import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import styles from "./custom-select-options.module.scss";

export interface ISelectOption {
  id: string | number;
  value: string;
}

interface Props {
  borderRadius?: number;
  options: ISelectOption[];
  multipleSelect?: boolean;
}

export const CustomSelectOptions: React.FC<Props> = (props) => {
  const [pickedOptions, setPickedOptions] = useState<ISelectOption[]>([]);
  const { borderRadius, options, multipleSelect } = props;
  const [selected, setSelected] = useState(options[0]);

  const handlePickOption = (option: ISelectOption) => {
    setPickedOptions((state) => [...state, option]);
  };

  const handleChange = (value: ISelectOption) => {
    setSelected(value);

    if (multipleSelect) {
      // check the value has not been selected
      for (const option of pickedOptions) {
        if (value.id === option.id) return;
      }

      handlePickOption(value);
      console.log(value);
    }
  };

  const handleRemove = (value: ISelectOption) => {
    const updatedOptions = pickedOptions.filter(
      (option) => option.id !== value.id
    );

    setPickedOptions(updatedOptions);
  };

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button
            className={({ open }) =>
              `relative w-full cursor-pointer text-[14px] rounded-[8px] border-[3px]
                ${
                  open ? "border-tertiary-1000" : "border-transparent"
                } bg-background-300 px-[12px] py-[8px] text-left sm:text-md`
            }
          >
            <span className="block truncate">
              {multipleSelect ? options[0].value : selected.value}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
                className="w-6 h-6 text-tertiary-1000"
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
            <Listbox.Options className="absolute z-50 w-full py-1 overflow-auto text-lg rounded-md bg-background-100 shadow-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  disabled={optionIdx === 0}
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer text-[14px] select-none py-[14px] px-[16px] ${
                      active && optionIdx !== 0
                        ? "bg-background-300"
                        : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block${
                          selected ? "font-medium" : "font-normal"
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
        {pickedOptions.length > 0 && (
          <div className={styles.options_container}>
            {pickedOptions.map((option) => (
              <p key={option.id} className={styles.option}>
                {option.value}
                <XMarkIcon
                  onClick={() => handleRemove(option)}
                  className={`h-6 w-6 text-tertiary-1000 cursor-pointer hover:text-red-600`}
                />
              </p>
            ))}
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default CustomSelectOptions;
