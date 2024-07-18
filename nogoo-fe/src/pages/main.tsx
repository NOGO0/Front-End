import React, { useEffect, useState } from "react";
import { styled, Styled } from "styled-components";
import Header from "../components/header";
import Announcement from "../components/announcement";
import { Upload } from "../assets";
import { FeedListType, useGetFeed } from "../api/feeds";

function Main() {
  const [arr, setArr] = useState<FeedListType[]>([]);
  useEffect(() => {
    useGetFeed().then((res) => {
      setArr(res.feed_list);
    });
  }, []);

  return (
    <div className="main">
      {arr.length !== 0 ? (
        <_YContainer>
          <_Inner_Container>
            <_YText>모집중인 공고 ({arr.length})</_YText>
            {arr.map(({ title, content, area, salary }) => (
              <>
                <Announcement
                  title={title}
                  contents={content}
                  location={area}
                  applicants="5"
                  cost={String(salary)}
                />
                <br />
              </>
            ))}
          </_Inner_Container>
        </_YContainer>
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
  margin-top: 70px;
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
