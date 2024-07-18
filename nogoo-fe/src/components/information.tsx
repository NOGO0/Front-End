import React from "react";
import { styled } from "styled-components";

interface InformationProps {
  title: string;
  text: string;
}

function Information({ title, text }: InformationProps) {
  return (
    <div className="information">
      <_Container>
        <_Title>{title}</_Title>
        <_Text>{text}</_Text>
      </_Container>
    </div>
  );
}

export default Information;

const _Container = styled.div`
  height: 84px;
  border-radius: 8px;
  border: 1px solid rgba(58, 99, 205, 0.1);
  background: #ecf0fa;
`;

const _Title = styled.p`
  margin-top: 12px;
  margin-left: 21px;
  font-size: 16px;
  font-weight: 400;
  color: #3a63cd;
  position: absolute;
`;

const _Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #3a63cd;
  margin-top: 39px;
  margin-left: 27px;
  margin-right: 27px;
`;
