import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { styled } from "styled-components";
import Information from "../components/information";
import Applicant from "../components/applicant";
import { useGetDetailFedd } from "../api/feeds/index"; // API 함수 import

interface DetailProps {
  feedId: number;
}

function Detail({ feedId }: DetailProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    useGetDetailFedd(feedId)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <Header />
      <_Container>
        <_Title>{data.title}</_Title>
        <_InnerContainer>
          <Information title="나이" text={data.age} />
          <Information title="지역" text={data.area} />
          <Information title="직종" text={data.job} />
          <Information
            title="내용"
            text={`${data.day} ${data.start_time}~${data.end_time}`}
          />
        </_InnerContainer>
        <_Right_Container>
          <_Cash>{data.salary}</_Cash>
          <_Cash_Text>원/월</_Cash_Text>
        </_Right_Container>
        <_Content>{data.content}</_Content>
        <_Line />
        <_Applicant_Text>지원자 ({data.applicants})</_Applicant_Text>
        {data.applicantsList.map((applicant: any) => (
          <Applicant
            key={applicant.id}
            age={applicant.age}
            area={applicant.area}
            phone_number={applicant.phone}
            name={applicant.name}
            content={applicant.about_me}
          />
        ))}
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

const _Figure_Text = styled.p`
  font-size: 90px;
  font-weight: 700;
  color: #999;
`;
