import React, { useState, ChangeEvent, forwardRef } from "react";
import { styled } from "styled-components";
import { eye_C, eye_O } from "../assets";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, name, value = "", onChange, type, ...res }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
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
            type={
              type !== "password" ? type : showPassword ? "text" : "password"
            }
            value={value}
            onChange={onChange}
            ref={ref}
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
  }
);

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
