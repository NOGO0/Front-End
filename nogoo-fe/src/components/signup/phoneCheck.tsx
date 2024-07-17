import { ChangeEvent, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { useSend } from "../../api/sms";
import { StepArgType } from "../../pages/signup/signup";
import { maskPhoneNumber } from "../../util/regex";

export default function PhoneCheck({
  state: { phone },
  NextLevel,
  setLevel,
}: StepArgType) {
  const [number, setNumber] = useState<string[]>([]);
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  let checkNumber = "0000";

  const setRef = (index: number, element: HTMLInputElement | null) => {
    inputRef.current[index] = element;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.value.length > 1)
      event.target.value = event.target.value.slice(0, 1);

    setNumber((prev) => {
      const test = [...prev];
      test[index] = event.target.value;
      return test;
    });

    if (index + 1 < inputRef.current.length && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    if (number.length === 4) {
      if (checkNumber === number.join("")) {
        NextLevel();
      }
    }
  }, [number]);

  useEffect(() => {
    // useSend(phone).then((res) => {
    //   checkNumber = res;
    // });
  }, []);

  return (
    <Wrapper>
      <Text>
        <h5>휴대폰 인증</h5>
        <p>+82) {maskPhoneNumber(phone)} 번호로 인증번호를 보냈습니다.</p>
      </Text>
      <NumberInput>
        <input
          onChange={(e) => {
            handleChange(e, 0);
          }}
          type="number"
          ref={(el) => setRef(0, el)}
        />
        <input
          onChange={(e) => {
            handleChange(e, 1);
          }}
          type="number"
          ref={(el) => setRef(1, el)}
        />
        <input
          onChange={(e) => {
            handleChange(e, 2);
          }}
          type="number"
          ref={(el) => setRef(2, el)}
        />
        <input
          onChange={(e) => {
            handleChange(e, 3);
          }}
          type="number"
          ref={(el) => setRef(3, el)}
        />
      </NumberInput>
      <Text2>
        인증번호가 오지 않았나요?{" "}
        <span
          onClick={() => {
            setLevel(0);
          }}
        >
          전화번호 다시 입력하기
        </span>
      </Text2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  > h5 {
    font-size: 20px;
    font-weight: 800;
    color: #000;
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

const Text2 = styled.p`
  color: #777;
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
  > span {
    color: #3a63cd;
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NumberInput = styled.div`
  display: flex;
  gap: 25px;
  > input {
    width: 70px;
    height: 80px;
    background-color: #eee;
    border: none;
    outline: none;
    border-radius: 12px;
    font-size: 45px;
    font-weight: 900;
    caret-color: transparent;
    text-align: center;
  }
`;
