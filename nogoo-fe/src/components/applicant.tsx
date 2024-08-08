import React, { useState } from "react";
import { styled } from "styled-components";

interface ApplicantProps {
  age: number;
  area: string;
  phone_number: string;
  name: string;
  content: string;
}

function Applicant({ age, area, phone_number, name, content }: ApplicantProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="applicant">
      <_Container>
        <_Inner_Container>
          <_Toggle onClick={toggleContent}>{isOpen ? "V" : ">"}</_Toggle>
          <_Name>
            {name} ({age})
          </_Name>
          <_Text>{area}</_Text>
          <_Text>{phone_number}</_Text>
        </_Inner_Container>
        {isOpen && <_Content>{content}</_Content>}
      </_Container>
    </div>
  );
}

export default Applicant;

const _Container = styled.div``;

const _Inner_Container = styled.div`
  display: flex;
  gap: 16px;
`;

const _Toggle = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const _Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3a63cd;
`;

const _Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #777;
`;

const _Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: black;
  width: 780px;
  word-wrap: break-word;
  margin-top: 12px;
`;
