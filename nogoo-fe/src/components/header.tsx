import React from "react";
import styled from "styled-components";
import { Logo } from "../assets";

function Header() {
  return (
    <_Header>
      <_Left_Header>
        <img src={Logo} />
        <_Write>사장님</_Write>
      </_Left_Header>
      <_Button>+ 새 공고 작성하기</_Button>
    </_Header>
  );
}

export default Header;

const _Header = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  position: static;
`;

const _Left_Header = styled.div`
  display: flex;
  margin-top: 22px;
  margin-bottom: 22px;
  margin-left: 10px;
`;

const _Write = styled.p`
  font-size: 12px;
  color: #3a63cd;
  margin-top: 40px;
`;

const _Button = styled.button`
  width: 138px;
  height: 37px;
  border: none;
  background-color: #f7f7f7;
  color: #3a63cd;
`;
