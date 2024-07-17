import { instance } from "../axios";

const router = "/sms";

export const useSend = async (body: string) => {
  const { data } = await instance.post(`${router}/send`, { phone: body });
  return data.number;
};
