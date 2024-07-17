import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { backgroundPatton, Logo2 } from "../assets";
import Button from "../components/button";
import Input from "../components/input";

function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({ id: "", password: "" });

  const handleChange = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <_Back>
      <Wrapper>
        <img src={Logo2} />
        <Form>
          <Input
            name="id"
            placeholder="아이디를 입력하세요."
            value={state.id}
            onChange={(event) => {
              handleChange("id", event.target.value);
            }}
          />
          <Input
            name="password"
            placeholder="비밀번호를 입력하세요."
            type="password"
            value={state.password}
            onChange={(event) => {
              handleChange("password", event.target.value);
            }}
          />
        </Form>
        <Button>로그인</Button>
        <Text>
          아직 회원가입을 안하셨나요?{" "}
          <span
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입하기
          </span>
        </Text>
      </Wrapper>
    </_Back>
  );
}

const _Back = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundPatton});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 163px;
    margin-bottom: 70px;
  }
  > button {
    margin-top: 50px;
  }
`;

const Form = styled.div`
  width: 340px;
  > div:last-child {
    margin-top: 12px;
  }
`;

const Text = styled.p`
  color: #777;
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
  > span {
    color: #000;
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Login;
