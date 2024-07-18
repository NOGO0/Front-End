import { instance } from "../axios";

export const useUploadImage = async (feedId: number, file: File) => {
  const form = new FormData();
  form.append("image", file);
  await instance.post(`/image/${feedId}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
