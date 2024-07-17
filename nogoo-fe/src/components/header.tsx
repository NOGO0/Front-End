import React from "react";
import styled from "styled-components";
import { Logo } from "../assets";

function Header() {
  return (
    <div className="header">
      <_Header>
        <img src={Logo} alt="Logo" />
      </_Header>
    </div>
  );
}

export default Header;

const _Header = styled.div`
  background-color: red;
`;
