import React from "react";
import { styled } from "styled-components";
import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/input";
function App() {
  return (
    <div className="App">
      <_Test>
        <Button>회원가입</Button>
      </_Test>
    </div>
  );
}

const _Test = styled.div`
  width: 200px;
`;

export default App;
