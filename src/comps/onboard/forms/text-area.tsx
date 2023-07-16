import React, { ChangeEvent, useState } from "react";
import styles from "./text-area.module.scss";

interface Props {
  placeholderText?: string;
}

export const TextArea: React.FC<Props> = ({ placeholderText }) => {
  const [textValue, setTextValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    const words = value.split(" ");
    const wordCount = words.length;

    if (wordCount <= 100) {
      setTextValue(value);
      if (value.trim()) {
        setCount(wordCount);
      } else {
        setCount(0);
      }
    }
  };

  return (
    <div className={styles.container}>
      <p>{count} /100</p>
      <div className={styles.input_wrapper}>
        <textarea
          placeholder={placeholderText ? placeholderText : ""}
          onChange={(e) => handleChange(e)}
          value={textValue}
        />
        <img src="/assets/icons/textwedge.svg" />
      </div>
    </div>
  );
};

export default TextArea;
