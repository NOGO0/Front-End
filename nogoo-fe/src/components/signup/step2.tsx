import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { styled } from "styled-components";
import { close } from "../../assets";
import { areaType, StepArgType } from "../../pages/signup/signup";
import Button from "../button";
import Input from "../input";
import Tag from "../Tag";

const Step2 = ({
  state,
  handleChange,
  NextLevel,
  addArray,
  removeArray,
}: StepArgType) => {
  function isAreaType(value: any): value is areaType {
    return ["서울", "대전", "광주", "부산", "인천"].includes(value);
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (isAreaType(event.currentTarget.value)) {
        addArray(event.currentTarget.value);
        setAreaString("");
      } else {
        toast.error("서울, 인천, 대전, 광주, 부산중에 작성해주세요.");
      }
    }
  };

  const [areaString, setAreaString] = useState("");

  const handleChange_ = (value: string) => {
    setAreaString(value);
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
          type="number"
          value={state.age}
          onChange={(event) => {
            handleChange("age", event.target.value);
          }}
        />
        <Input
          name="area"
          placeholder="근무지역을 추가하세요."
          onKeyUp={handleKeyDown}
          value={areaString}
          onChange={(event) => {
            handleChange_(event.target.value);
          }}
        />
        <div className="tags">
          {state.area.map((item) => (
            <Tag>
              {item}
              <img
                src={close}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  removeArray(item);
                }}
              />
            </Tag>
          ))}
        </div>
      </Form>
      <Button
        disabled={!state.age || state.area.length === 0}
        onClick={NextLevel}
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
