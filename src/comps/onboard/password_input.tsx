import React, { ChangeEvent, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./text-input.module.scss";

interface Props {
  value: number | string;
  placeholder?: string;
  error?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<Props> = (props) => {
  const { value, handleChange, placeholder, error } = props;
  const [revealPassword, setRevealPassword] = useState<boolean>(false);

  const toggleRevealPassword = () => {
    setRevealPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          value={value}
          onChange={handleChange}
          type={revealPassword ? "text" : "password"}
        />
        {/* {value.toString().length > 0 && !error && (
          <img src={"/assets/icons/success-icon.svg"} />
        )} */}
        {revealPassword ? (
          <AiOutlineEye
            size={18}
            onClick={toggleRevealPassword}
            className={`cursor-pointer`}
          />
        ) : (
          <AiOutlineEyeInvisible
            size={18}
            onClick={toggleRevealPassword}
            className={`cursor-pointer`}
          />
        )}
      </div>
      <p className={styles.error_message}>{error ? error : ""}</p>
    </div>
  );
};

export default PasswordInput;
