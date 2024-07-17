import { ChangeEvent, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

export default function PhoneCheck() {
  const [number, setNumber] = useState<number[]>([]);
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

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
      test[index] = Number(event.target.value);
      return test;
    });

    if (index + 1 < inputRef.current.length && inputRef.current[index + 1]) {
      inputRef.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    if (number.length === 4) {
      //인증 로직
    }
  }, [number]);

  return (
    <Wrapper>
      <Text>
        <h5>휴대폰 인증</h5>
        <p>+82) 010-29**-**** 번호로 인증번호를 보냈습니다.</p>
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
