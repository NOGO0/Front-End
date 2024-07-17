import { useState } from "react";
import { styled } from "styled-components";
import { StepArgType } from "../../pages/signup/signup";
import Button from "../button";
import Input from "../input";

const Step3 = ({ state, handleChange, onComplate }: StepArgType) => {
  const [passworCheckk, setPass] = useState("");
  return (
    <Wrapper>
      <Text>
        <h5>회원가입</h5>
        <p>사장님이 사용하실 아이디와 비밀번호를 입력하세요.</p>
      </Text>
      <Form>
        <Input
          name="id"
          placeholder="아이디를 입력하세요"
          value={state.account_id}
          onChange={(event) => {
            handleChange("account_id", event.target.value);
          }}
        />
        <Input
          name="password"
          placeholder="비밀번호를 입력하세요."
          value={state.password}
          onChange={(event) => {
            handleChange("password", event.target.value);
          }}
          type="password"
        />
        <Input
          name="passwordCheck"
          placeholder="비밀번호를 한번 더 입력하세요."
          type="password"
          value={passworCheckk}
          onChange={(event) => {
            setPass(event.target.value);
          }}
        />
      </Form>
      <Button
        disabled={
          !state.account_id ||
          !state.password ||
          !passworCheckk ||
          passworCheckk !== state.password
        }
        onClick={onComplate}
      >
        완료
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Step3;
