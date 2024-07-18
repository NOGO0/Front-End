import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Logo } from "../assets";

function Header() {
  useNavigate();
  const navigate = useNavigate();
  return (
    <_Header>
      <_Left_Header
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} />
        <_Write>사장님</_Write>
      </_Left_Header>
      <_Button
        onClick={() => {
          navigate("/create");
        }}
      >
        + 새 공고 작성하기
      </_Button>
    </_Header>
  );
}

export default Header;

const _Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 240px;
  align-items: center;
  background-color: white;
`;

const _Left_Header = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
  cursor: pointer;
  > img {
    width: 50px;
  }
`;

const _Write = styled.p`
  font-size: 12px;
  color: #3a63cd;
`;

const _Button = styled.button`
  border: none;
  background-color: #f7f7f7;
  color: #3a63cd;
  cursor: pointer;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
`;
