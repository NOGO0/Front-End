import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import { Upload } from "../assets";

function Main() {
  return (
    <>
      <Header />
      <_Container>
        <img src={Upload} />
        <_Text>아직 작성한 공고가 없습니다.</_Text>
        <_Text2>새로운 공고를 게시하여 같이 일할 분을 모셔보세요.</_Text2>
      </_Container>
    </>
  );
}

const _Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const _Text = styled.p`
  font-size: 12px;
  color: #777777;
  margin-top: 40px;
`;
const _Text2 = styled.p`
  font-size: 12px;
  color: #777777;
`;
export default Main;
