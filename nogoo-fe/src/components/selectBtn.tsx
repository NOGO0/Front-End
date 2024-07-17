import { ReactNode } from "react";
import { styled } from "styled-components";

interface PropsType extends React.HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  name: string;
  type?: "radio" | "checkbox";
  value: string;
}

export default function SelectBtn({
  children,
  type = "radio",
  value,
  ...res
}: PropsType) {
  return (
    <Wrapper>
      <input type={type} value={value} {...res} style={{ display: "none" }} />
      <div className="continaer">{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.label`
  > .continaer {
    background-color: #eee;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 400;
    color: #000;
    border: 1px solid #eee;
    padding: 4px 12px;
    display: inline;
    cursor: pointer;
  }
  > input:checked + .continaer {
    background-color: rgba(58, 99, 205, 0.1);
    border-color: #86a8ff;
    color: #3a63cd;
  }
`;
