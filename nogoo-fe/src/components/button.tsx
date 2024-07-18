import { styled } from "styled-components";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
const Button = ({ children, ...res }: PropsType) => {
  return <_Button {...res}>{children}</_Button>;
};

const _Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #3a63cd;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`;

export default Button;
