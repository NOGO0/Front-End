import { useState } from "react";
import { styled } from "styled-components";
import { RequestType, StepArgType } from "../../pages/signup/signup";
import Button from "../button";
import Input from "../input";

const Step1 = ({ handleChange, state, NextLevel }: StepArgType) => {
  return (
    <Wrapper>
      <Text>
        <h5>회원가입</h5>
        <p>사장님의 이름과 전화번호를 알려주세요.</p>
      </Text>
      <Form>
        <Input
          name="name"
          placeholder="이름을 입력하세요."
          value={state.name}
          onChange={(event) => {
            handleChange("name", event.target.value);
          }}
        />
        <Input
          name="phone"
          placeholder="전화번호를 입력하세요."
          value={state.phone}
          onChange={(event) => {
            handleChange("phone", event.target.value);
          }}
        />
      </Form>
      <Button
        disabled={!state.name || !state.phone}
        onClick={() => {
          NextLevel();
        }}
      >
        다음
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    margin-top: 40px;
  }
`;

const Text = styled.div`
  > h5 {
    font-size: 20px;
    font-weight: 800;
    color: #3a63cd;
    text-align: center;
  }
  > p {
    color: #777;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 70px;
  }
`;

const Form = styled.div`
  width: 340px;
  > div:last-child {
    margin-top: 12px;
  }
`;

export default Step1;
