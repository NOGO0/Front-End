import { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { imageUpload } from "../assets";

export default function ImageUpload({
  selectFile,
}: {
  selectFile: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      <Container>
        <img src={imageUpload} />
        <p>사진업로드</p>
      </Container>
      <input type="file" accept="image/*" onChange={selectFile} />
    </label>
  );
}

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #3a63cd;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > p {
    color: #777;
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
  }
  + input {
    display: none;
  }
`;
