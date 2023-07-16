import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { ISelectOption } from "./custom-select-options";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

interface Props {
  borderRadius?: number;
  options: ISelectOption[];
}

export const ComboBox: React.FC<Props> = (props) => {
  const { borderRadius, options } = props;
  const [selected, setSelected] = useState<ISelectOption>(options[0]);
  const [query, setQuery] = useState("");

  const handleChange = (value: ISelectOption) => {
    setSelected(value);
  };

  const handleClear = () => {
    setSelected({ id: "-9999", value: "" });
  };

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-full">
      <Combobox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          {/* <div className="relative w-full overflow-hidden text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"> */}
          <Combobox.Input
            className={({
              open,
            }) => `relative w-full text-[14px] rounded-[8px] border-[3px]
              ${
                open
                  ? "border-tertiary-1000 pl-[32px] rounded-[32px]"
                  : "border-transparent"
              } bg-background-300 px-[12px] py-[8px] text-left sm:text-md`}
            displayValue={(option: ISelectOption) => option.value}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 left-0 ml-[12px] flex items-center pr-2">
            {({ open }) => (
              <>
                {open ? (
                  <MagnifyingGlassIcon
                    className="w-6 h-6 text-tertiary-1000"
                    aria-hidden="true"
                  />
                ) : null}
              </>
            )}
          </Combobox.Button>
          <Combobox.Button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 mr-[12px] flex items-center pr-2"
          >
            {({ open }) => (
              <>
                {open ? (
                  <XCircleIcon
                    className="w-6 h-6 text-tertiary-1000"
                    aria-hidden="true"
                  />
                ) : null}
              </>
            )}
          </Combobox.Button>
          {/* </div> */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-50 w-full py-1 overflow-auto text-lg rounded-md bg-background-100 shadow-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredOptions.length === 0 && query !== "" ? (
                <div className="relative cursor-pointer text-[14px] select-none py-[14px] px-[16px]">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option, optionIdx) => (
                  <Combobox.Option
                    disabled={option.id === "1"}
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-pointer text-[14px] select-none py-[14px] px-[16px] ${
                        active && option.id !== "1"
                          ? "bg-background-300"
                          : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
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
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
