import React, { ChangeEvent } from "react";
import { styled } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TimePicker({
  type = "time",
  handleChange,
  ...res
}: Props) {
  return <Time type={type} {...res} onChange={handleChange} />;
}

const Time = styled.input`
  padding: 14px 20px;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
`;
