import { useState } from "react";
import { styled } from "styled-components";
import Button from "../button";
import Input from "../input";
import Tag from "../Tag";

const Step2 = () => {
  const [state, setState] = useState({ name: "", phone: [] });

  const handleChange = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert("Enter key pressed");
    }
  };

  return (
    <Wrapper>
      <Text>
        <h5>회원가입</h5>
        <p>사장님의 기본정보를 입력하세요.</p>
      </Text>
      <Form>
        <Input
          name="age"
          placeholder="나이를 입력하세요"
          value={state.name}
          onChange={(event) => {
            handleChange("name", event.target.value);
          }}
        />
        <Input
          name="area"
          placeholder="근무지역을 추가하세요."
          onKeyUp={handleKeyDown}
        />
        <div className="tags">
          <Tag>서울</Tag>
          <Tag>대전</Tag>
          <Tag>대전</Tag>
        </div>
      </Form>
      <Button>다음</Button>
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
  > .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

export default Step2;
