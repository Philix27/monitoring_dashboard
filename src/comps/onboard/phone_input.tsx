import React, { ChangeEvent } from "react";
import styles from "./text-input.module.scss";
import _PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  value: string;
  placeholder?: string;
  error?: string;
  handleChange: (e: any) => void;
}

export const PhoneInput: React.FC<Props> = (props) => {
  const { value, handleChange, placeholder, error } = props;

  return (
    <div>
      <div className={styles.container}>
        {/* <CountryFlagSelect /> */}
        <_PhoneInput
          country={"us"}
          value={value}
          onChange={handleChange}
          inputClass={styles.input_class}
          buttonClass={styles.button_class}
          containerClass={styles.container_class}
        />
        {value.toString().length > 0 && !error && (
          <img src={"/assets/icons/success-icon.svg"} />
        )}
      </div>
      <p className={styles.error_message}>{error ? error : ""}</p>
    </div>
  );
};

export default PhoneInput;
