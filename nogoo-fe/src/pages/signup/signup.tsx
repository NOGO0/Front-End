import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useSignup } from "../../api/users";
import { backgroundPatton } from "../../assets";
import PhoneCheck from "../../components/signup/phoneCheck";
import Step1 from "../../components/signup/step1";
import Step2 from "../../components/signup/step2";
import Step3 from "../../components/signup/step3";

export type areaType = "서울" | "대전" | "광주" | "부산" | "인천";

export interface RequestType {
  name: string;
  phone: string;
  age: string;
  area: areaType[];
  account_id: string;
  password: string;
}

export interface StepArgType {
  handleChange: (name: string, value: string) => void;
  state: RequestType;
  NextLevel: () => void;
  addArray: (value: areaType) => void;
  removeArray: (value: string) => void;
  onComplate: () => void;
  setLevel: (num: number) => void;
}

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [state, setState] = useState<RequestType>({
    name: "",
    phone: "",
    age: "",
    area: [],
    account_id: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const addArray = (value: areaType) => {
    setState((prev) => {
      const arr = new Set([...prev.area, value]);
      return { ...prev, area: Array.from(arr) };
    });
  };
  const removeArray = (value: string) => {
    setState((prev) => {
      const arr = prev.area.filter((item) => item !== value);
      return { ...prev, area: arr };
    });
  };

  const NextLevel = () => {
    setStep((prev) => prev + 1);
  };

  const setLevel = (num: number) => {
    setStep(num);
  };

  const onComplate = () => {
    // useSignup(state).then(() => {
    //회원가입 후 로직
    navigate("/login");
    toast.success("회원가입 성공!");
    // });
  };

  const arg: StepArgType = {
    handleChange,
    NextLevel,
    state,
    addArray,
    removeArray,
    onComplate,
    setLevel,
  };

  const stepArr = [
    <Step1 {...arg} />,
    <PhoneCheck {...arg} />,
    <Step2 {...arg} />,
    <Step3 {...arg} />,
  ];

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <_Back>{stepArr[step]}</_Back>;
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
