import { ReactNode } from "react";
import { styled } from "styled-components";

interface PropsType {
  children: ReactNode;
}

export default function Tag({ children }: PropsType) {
  return <Containter>{children}</Containter>;
}

const Containter = styled.div`
  color: #3a63cd;
  border: 1px solid #86a8ff;
  background-color: #ecf0fa;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
`;
