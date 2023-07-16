import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

export interface ISelectOption {
  id: string | number;
  flagComponent: JSX.Element;
}

interface Props {
  borderRadius?: number;
  //   options: ISelectOption[];
}

const FlagComponent: React.FC<{ url: string }> = ({ url }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt={"flag_img"} className={`w-[18.67px] h-[12px]`} />;
};

const country_flags: ISelectOption[] = [
  {
    id: "1",
    flagComponent: <FlagComponent url="/assets/flags/nigeria.png" />,
  },
  {
    id: "2",
    flagComponent: <FlagComponent url="/assets/flags/kenya.jpg" />,
  },
];

export const CountryFlagSelect: React.FC<Props> = (props) => {
  const [pickedOptions, setPickedOptions] = useState<ISelectOption[]>([]);
  const { borderRadius } = props;
  const [selected, setSelected] = useState(country_flags[0]);

  const handlePickOption = (option: ISelectOption) => {
    setPickedOptions((state) => [...state, option]);
  };

  const handleChange = (value: ISelectOption) => {
    setSelected(value);

    handlePickOption(value);
    console.log(value);
  };

  return (
    <div className="w-[60px]">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button
            className={({ open }) =>
              `relative w-full cursor-pointer text-[14px] border-transparent bg-background-300 text-left sm:text-md`
            }
          >
            <span className="block truncate">{selected.flagComponent}</span>
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
            <Listbox.Options className="absolute mt-[10px] ml-[-8px] z-50 w-full py-1 overflow-auto rounded-md bg-background-100 shadow-200 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {country_flags.map((country, countryIdx) => (
                <Listbox.Option
                  key={countryIdx}
                  className={({ active }) =>
                    `relative cursor-pointer text-[14px] select-none py-[12px] flex justify-center ${
                      active ? "bg-background-300" : "text-gray-900"
                    }`
                  }
                  value={country}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {country.flagComponent}
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

export default CountryFlagSelect;
