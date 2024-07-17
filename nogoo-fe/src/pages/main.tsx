import React from "react";
import { styled, Styled } from "styled-components";
import Header from "../components/header";
import Announcement from "../components/announcement";
import { Upload } from "../assets";

function Main() {
  const arr: string[] = [];

  return (
    <div className="main">
      <Header />
      {arr.length !== 0 ? (
        <div>
          <_YContainer>
            <_Inner_Container>
              <_YText>모집중인 공고 (3)</_YText>
              <Announcement
                title="OO아파트 경비원 구합니다"
                contents="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                location="서울 강남구"
                applicants="5"
                cost="2,000,000"
              />
              <br />
              <Announcement
                title="OO아파트 경비원 구합니다"
                contents="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                location="서울 강남구"
                applicants="5"
                cost="2,000,000"
              />
              <br />
              <Announcement
                title="OO아파트 경비원 구합니다"
                contents="내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"
                location="서울 강남구"
                applicants="5"
                cost="2,000,000"
              />
            </_Inner_Container>
          </_YContainer>
        </div>
      ) : (
        <div>
          <_Container>
            <img src={Upload} />
            <_Text>아직 작성한 공고가 없습니다.</_Text>
            <_Text2>새로운 공고를 게시하여 같이 일할 분을 모셔보세요.</_Text2>
          </_Container>
        </div>
      )}
    </div>
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

const _YContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _YText = styled.p`
  color: #777777;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 36px;
`;

const _Inner_Container = styled.div`
  margin-top: 40px;
  gap: 16px;
`;
export default Main;
