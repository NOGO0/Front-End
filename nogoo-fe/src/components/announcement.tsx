import styled from "styled-components";
import { locationImage } from "../assets";

interface AnnouncementProps {
  title: string;
  contents: string;
  location?: string;
  applicants?: string;
  cost: string;
}

export function Announcement({
  title,
  contents,
  location,
  applicants,
  cost,
}: AnnouncementProps) {
  return (
    <div className="announcement">
      <_Container>
        <_Styled_Container>
          <_Title>{title}</_Title>
          <_Contents>{contents}</_Contents>
          <_Inner_Container>
            <_Left_Container>
              <_Inner>
                <img src={locationImage} />
                <_Inner_Text>{location}</_Inner_Text>
              </_Inner>
              {applicants && (
                <_Inner>
                  <_Inner_Text>{applicants}명 지원</_Inner_Text>
                </_Inner>
              )}
            </_Left_Container>
            <_Right_Container>
              <_Cost_Text>{cost}</_Cost_Text>
              <_Unit_Text>원/월</_Unit_Text>
            </_Right_Container>
          </_Inner_Container>
        </_Styled_Container>
      </_Container>
    </div>
  );
}

export default Announcement;

const _Container = styled.div`
  width: 796px;
  height: 135px;
  border: solid 1px #dddddd;
  border-radius: 12px;
`;

const _Styled_Container = styled.div`
  margin-top: 20px;
  margin-left: 24px;
`;

const _Title = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 700;
`;

const _Contents = styled.p`
  font-size: 14px;
  color: #777777;
  margin-bottom: 15px;
`;

const _Inner_Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _Left_Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`;

const _Right_Container = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
  margin-top: 12px;
`;

const _Inner = styled.div`
  border: solid 1px #3a63cd;
  background-color: #86a8ff 10%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: 28px;
  position: relative;
  padding: 5px;
`;

const _Inner_Text = styled.p`
  font-size: 12px;
  color: #3a63cd;
`;

const _Cost_Text = styled.p`
  font-size: 16px;
  color: #3a63cd;
`;

const _Unit_Text = styled.p`
  font-size: 16px;
  color: #000000;
`;
