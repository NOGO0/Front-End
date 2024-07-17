import React, { useState, ChangeEvent } from "react";
import { styled } from "styled-components";
import { eye_C, eye_O } from "../assets";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<PasswordInputProps> = ({
  label,
  name,
  value = "",
  onChange,
  type,
  ...res
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      {label && (
        <_Label htmlFor={name}>
          <p>{label}</p>
        </_Label>
      )}
      <_Container className="input-wrapper">
        <input
          id={name}
          name={name}
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          value={inputValue}
          onChange={handleChange}
          {...res}
        />
        {type === "password" && (
          <span onClick={toggleShowPassword}>
            <img src={showPassword ? eye_O : eye_C} />
          </span>
        )}
      </_Container>
    </div>
  );
};

export default Input;

const _Container = styled.div`
  width: 100%;
  height: 41px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  > input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    padding: 14px 0px 14px 20px;
    flex: 1;
  }
`;

const _Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  > p {
    margin-bottom: 12px;
  }
`;
