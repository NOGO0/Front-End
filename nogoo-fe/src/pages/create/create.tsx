import { type } from "os";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useCreateFeed } from "../../api/feeds";
import { useUploadImage } from "../../api/image";
import Button from "../../components/button";
import ImageUpload from "../../components/imageUpload";
import Input from "../../components/input";
import SelectBtn from "../../components/selectBtn";
import TimePicker from "../../components/timePicker";

export type JobType =
  | "DEVELOPER"
  | "CARE"
  | "GUARD"
  | "DOCUMENT"
  | "COOK"
  | "SERVING"
  | "DELIVERY"
  | "SALES";

export type AreaType = "서울" | "대전" | "광주" | "부산" | "인천";

export interface RequestType {
  title: string;
  content: string;
  salary: number;
  age: number;
  area: AreaType | "";
  job: JobType | "";
  gender: "MALE" | "FEMALE" | "";
  start_time: string;
  end_time: string;
}
export default function Create() {
  const [image, setImage] = useState<File | null>(null);
  const navi = useNavigate();
  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  const [state, setState] = useState<RequestType>({
    title: "",
    content: "",
    salary: 0,
    age: 0,
    area: "",
    job: "",
    gender: "",
    start_time: "",
    end_time: "",
  });
  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (name: string, value: string | number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper>
      <h1>새 공고 작성하기</h1>
      <hr />
      <HeaderText>
        <p className="title">대표 이미지</p>
        <p className="content">
          공고에 들어갈 대표 이미지를 업로드 할 수 있습니다.
        </p>
      </HeaderText>
      <Image>
        <ImageUpload selectFile={selectFile} />
        {image && <p>* 파일 선택됨({image.name})</p>}
      </Image>
      <HeaderText>
        <p className="title">공고 세부정보</p>
        <p className="content">자유롭게 필요한 내용을 작성해 주세요.</p>
      </HeaderText>
      <DetailForm>
        <Input
          name="title"
          value={state.title}
          onChange={(e) => {
            handleChange("title", e.target.value);
          }}
          placeholder="제목을 입력하세요."
        />
        <textarea
          name="content"
          value={state.content}
          rows={10}
          onChange={(e) => {
            handleChange("content", e.target.value);
          }}
          placeholder={`내용을 입력하세요.
ex) 근무 내용, 연락처, 필요자격 등`}
        />
      </DetailForm>
      <HeaderText>
        <p className="title">근무 정보</p>
        <p className="content">근로자가 근무 할 환경입니다.</p>
      </HeaderText>
      <Info>
        <Input
          label="급여"
          name="salary"
          placeholder="ex) 2,000,000"
          value={String(state.salary)}
          onChange={(e) => {
            handleChange("salary", e.target.value);
          }}
        />
        <Input
          label="연령"
          name="age"
          placeholder="나이를 입력하세요."
          type="number"
          value={String(state.age)}
          onChange={(e) => {
            handleChange("age", e.target.value);
          }}
        />
        <Jobs>
          <p>직종</p>
          <Selects>
            <SelectBtn
              name="job"
              value="DEVELOPER"
              onClick={() => {
                handleChange("job", "DEVELOPER");
              }}
            >
              개발
            </SelectBtn>
            <SelectBtn
              name="job"
              value="CARE"
              onClick={() => {
                handleChange("job", "CARE");
              }}
            >
              돌봄
            </SelectBtn>
            <SelectBtn
              name="job"
              value="GUARD"
              onClick={() => {
                handleChange("job", "GUARD");
              }}
            >
              경비
            </SelectBtn>
            <SelectBtn
              name="job"
              value="DOCUMENT"
              onClick={() => {
                handleChange("job", "DOCUMENT");
              }}
            >
              서류
            </SelectBtn>
            <SelectBtn
              name="job"
              value="COOK"
              onClick={() => {
                handleChange("job", "COOK");
              }}
            >
              요리
            </SelectBtn>
            <SelectBtn
              name="job"
              value="SERVING"
              onClick={() => {
                handleChange("job", "SERVING");
              }}
            >
              서빙
            </SelectBtn>
            <SelectBtn
              name="job"
              value="DELIVERY"
              onClick={() => {
                handleChange("job", "DELIVERY");
              }}
            >
              배달
            </SelectBtn>
            <SelectBtn
              name="job"
              value="SALES"
              onClick={() => {
                handleChange("job", "SALES");
              }}
            >
              영업
            </SelectBtn>
          </Selects>
        </Jobs>
        <Input
          label="근무 지역"
          name="area"
          placeholder="근무할 지역을 입력하세요."
          value={state.area}
          onChange={(e) => {
            handleChange("area", e.target.value);
          }}
        />
        <Jobs>
          <p>근무 기간</p>
          <Selects>
            <SelectBtn
              name="work_day"
              value="MON"
              onClick={() => {
                handleChange("work_day", "MON");
              }}
            >
              월
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="TUE"
              onClick={() => {
                handleChange("work_day", "TUE");
              }}
            >
              화
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="WED"
              onClick={() => {
                handleChange("work_day", "WED");
              }}
            >
              수
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="THU"
              onClick={() => {
                handleChange("work_day", "THU");
              }}
            >
              목
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="FRI"
              onClick={() => {
                handleChange("work_day", "FRI");
              }}
            >
              금
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="SAT"
              onClick={() => {
                handleChange("work_day", "SAT");
              }}
            >
              토
            </SelectBtn>
            <SelectBtn
              name="work_day"
              value="SUN"
              onClick={() => {
                handleChange("work_day", "SUN");
              }}
            >
              일
            </SelectBtn>
          </Selects>
          <Times>
            <TimePicker
              handleChange={(e) => {
                handleChange("start_time", `${e.target.value}:00`);
              }}
            />
            <p>~</p>
            <TimePicker
              handleChange={(e) => {
                handleChange("end_time", `${e.target.value}:00`);
              }}
            />
          </Times>
        </Jobs>
        <Jobs>
          <p>성별</p>
          <Selects>
            <SelectBtn
              name="gender"
              value="MALE"
              onClick={() => {
                handleChange("gender", "MALE");
              }}
            >
              남자
            </SelectBtn>
            <SelectBtn
              name="gender"
              value="FEMALE"
              onClick={() => {
                handleChange("gender", "FEMALE");
              }}
            >
              여자
            </SelectBtn>
          </Selects>
        </Jobs>
      </Info>
      <Complite>
        <div>
          <Button
            onClick={() => {
              useCreateFeed(state).then(({ feed_id }) => {
                if (image) {
                  useUploadImage(feed_id, image).then(() => {
                    navi(`/feed/${feed_id}`);
                    toast.success("공고가 작성되었습니다.");
                  });
                } else {
                  navi(`/feed/${feed_id}`);
                  toast.success("공고가 작성되었습니다.");
                }
              });
            }}
          >
            작성 완료
          </Button>
        </div>
      </Complite>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 70px 403px 100px 403px;
  padding-top: 40px;
  > h1 {
    color: #555;
    font-size: 24px;
    font-weight: 700;
  }
  > hr {
    border: none;
    border-top: 1px solid #ddd;
    margin-top: 14px;
  }
`;

const HeaderText = styled.div`
  margin-top: 50px;
  > .title {
    color: #3a63cd;
    font-size: 20px;
    font-weight: 400;
  }
  > .content {
    color: #777;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
  }
`;

const Image = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: end;
  gap: 8px;
  > p {
    color: #3a63cd;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;

const DetailForm = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #dddddd;
    padding: 14px 20px;
    outline: none;
    font-size: 12px;
    resize: none;
  }
  > textarea::placeholder {
    color: #777;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 24px;
`;

const Selects = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const Jobs = styled.div`
  > p {
    font-size: 16px;
    color: #000;
    font-weight: 400;
    margin-bottom: 16px;
  }
`;

const Times = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  > p {
    font-size: 20px;
    font-weight: 900;
    color: #777;
  }
`;

const Complite = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  > div {
    width: 340px;
  }
`;
