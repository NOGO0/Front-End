import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { backgroundPatton } from "../../assets";
import PhoneCheck from "../../components/signup/phoneCheck";
import Step1 from "../../components/signup/step1";
import Step2 from "../../components/signup/step2";
import Step3 from "../../components/signup/step3";

export interface RequestType {
  name: string;
  phone: string;
  age: number | undefined;
  area: string[];
  id: string;
  password: string;
}

export interface StepArgType {
  handleChange: (name: string, value: string) => void;
  state: RequestType;
  NextLevel: () => void;
}

export default function Signup() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<RequestType>({
    name: "",
    phone: "",
    age: undefined,
    area: [],
    id: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const NextLevel = () => {
    setStep((prev) => prev + 1);
  };

  const arg: StepArgType = {
    handleChange,
    NextLevel,
    state,
  };

  const stepArr = [<Step1 {...arg} />, <PhoneCheck />, <Step2 />, <Step3 />];

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
