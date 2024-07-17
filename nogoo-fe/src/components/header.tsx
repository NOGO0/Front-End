import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <_Header>
        <Logo />
      </_Header>
    </div>
  );
}

export default Header;

const _Header = styled.div`
  background-color: red;
`;
