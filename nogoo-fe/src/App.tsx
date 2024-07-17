import React from "react";
import { styled } from "styled-components";
import Header from "./components/header";
import Input from "./components/input";
function App() {
  return (
    <div className="App">
      <_Test>
        <Input name="id" type="password" label="비밀번호" />
      </_Test>
    </div>
  );
}

const _Test = styled.div`
  width: 200px;
`;

export default App;
