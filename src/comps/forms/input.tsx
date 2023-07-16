import React from "react";
import styled from "styled-components";
import { globalStyles } from "../../styles/themes/globalstyles";
import styles from "./styles.module.scss";

interface Props {
  label: string;
  sublabel?: string;
  name: string;
  id: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IComponrnts {
  InputText: JSX.Element;
}

export function InputText(props: Props): JSX.Element {
  const { id, label, name, value, placeholder, onChange, sublabel, error } =
    props;
  return (
    <div className={styles.input_box_text}>
      <label htmlFor={name} className="label">
        {label}
        <span>{sublabel}</span>
      </label>
      <input
        // title="inputtext"
        type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
}

export function InputPassowrd(props: Props): JSX.Element {
  const { id, label, name, value, placeholder, onChange, error, sublabel } =
    props;
  return (
    <div className={styles.input_box_text}>
      <label htmlFor={name} className="label">
        {label}
        <span>{sublabel}</span>
      </label>
      <input
        // title="inputtext"
        type="password"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      <span className={styles.error}>{error}</span>
    </div>
  );
}

export function InputNumber(props: Props): JSX.Element {
  const { id, label, name, value, placeholder, onChange } = props;
  return (
    <div className={styles.input_box_number}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function Seperator() {
  return <hr className={styles.hr} />;
}

interface IButton {
  name: string;
  onClick: () => void;
}

export function InputButton(props: IButton): JSX.Element {
  const { name } = props;
  return (
    <input
      className={styles.btn}
      value={name}
      type="button"
      onClick={props.onClick}
    />
  );
}

interface ISelect {
  title: string;
  value: string;
  onChange: (e) => void;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  optionsParams: {
    value: string;
    label: string;
  }[];
}

export function InputSelect(props: ISelect) {
  const { optionsParams, title, value, onChange } = props;

  return (
    <div className={styles.input_box_text}>
      <label htmlFor={title} className={styles.label}>
        {title}
      </label>
      <Select value={value} required onChange={onChange}>
        {optionsParams.map((v, index) => (
          <Option key={index} value={v.value}>
            {v.label}
          </Option>
        ))}
      </Select>
      {/* <Select onChange={onChange}>
        {optionsParams.map((v, index) => (
          <Option key={index} value={v.value}>
            {v.label}
          </Option>
        ))}
      </Select> */}
    </div>
  );
}

const Select = styled.select`
  height: 50px;
  text-align: left;
  width: 100%;
  margin: 5px 0;
  padding: 15px;
  border-radius: 5px;
  outline-color: ${globalStyles.colors.primary};
  outline-width: 0.5px;
  outline-style: solid;
  background-color: ${globalStyles.colors.backgroundColor};
  border-style: none;
  color: "#000";
  position: relative;
`;

const Option = styled.option`
  color: ${globalStyles.colors.black800};
  padding: 10px 15px;
  background-color: ${globalStyles.colors.backgroundColor};
  appearance: none;
  position: absolute;
  left: 20px;
  cursor: pointer;
`;

// const Option = styled.option`
//   text-align: left;
//   color: ${globalStyles.colors.black800};
//   padding: 10px 15px;
//   background-color: $cardColor;
//   border-bottom: solid 1px #a6a6a6;
//   /* font-size: 20px; */
// `;
