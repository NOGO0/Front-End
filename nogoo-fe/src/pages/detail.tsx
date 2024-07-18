import React from "react";
import Header from "../components/header";
import { styled, Styled } from "styled-components";
import Information from "../components/information";
import Applicant from "../components/applicant";

interface DetailProps {
  salary: number;
  subtitle: string;
  text: string;
  job_number: number;
  content: string;
  applicants: number;
  area: string;
}

function Detail({
  subtitle,
  salary,
  text,
  applicants,
  content,
  area,
}: DetailProps) {
  return (
    <div className="detail">
      <Header />
      <_Container>
        <_SubTitle>{subtitle}</_SubTitle>
        <_Title>{text}</_Title>
        <_InnerContainer>
          <Information title="나이" text="50~60대" />
          <Information title="지역" text="서울 강남구" />
          <Information title="직종" text="유아 돌봄이" />
          <Information title="내용" text="월화수목금 9:00~18:00" />
        </_InnerContainer>
        <_Right_Container>
          <_Cash>{salary}</_Cash>
          <_Cash_Text>원/월</_Cash_Text>
        </_Right_Container>
        <_Content>{content}</_Content>
        <_Line />
        <_Applicant_Text>지원자 ({applicants})</_Applicant_Text>
        <Applicant
          age={60}
          area="광주"
          phone_number="010-1234-5678"
          name="안승민"
          content="asdfasdfasdf"
        />
      </_Container>
    </div>
  );
}

export default Detail;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 322px;
  margin-top: 63px;
`;

const _SubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #777;
`;

const _InnerContainer = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 16px;
`;

const _Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: black;
`;

const _Right_Container = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 375px;
  margin-top: 39px;
`;

const _Cash = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #3a63cd;
`;

const _Cash_Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

const _Content = styled.div`
  border: none;
  width: 800px;
  word-wrap: break-word;
  margin-top: 58px;
`;

const _Line = styled.hr`
  width: 800px;
  height: 1px;
  background-color: #dddddd;
  margin-top: 75px;
  margin-right: 380px;
`;

const _Applicant_Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #777;
  margin-top: 32px;
`;
