import { instance } from "../axios";

const router = "/sms";

export const useSend = async (body: string) => {
  const { data } = await instance.post(`${router}/send`, { phone: body });
  return data.number;
};

export const useSendPassMessage = async (body: {
  is_pass_status: boolean;
  title: string;
  to_phone: string; // - 빼고 보내기
}) => {
  await instance.post(`${router}/pass`, body);
};
