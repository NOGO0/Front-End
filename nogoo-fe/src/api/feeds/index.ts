import { AreaEnum } from "./../../util/enum";
import { instance } from "../axios";
import { AreaType, RequestType } from "../../pages/create/create";

const router = "/feeds";

function getAreaName(area: AreaType): string {
  return AreaEnum[area];
}

export const useCreateFeed = async (body: RequestType) => {
  const { data } = await instance.post(router, {
    ...body,
    area: getAreaName(body.area as AreaType),
    salary: Number(body.salary),
    age: Number(body.age),
  });
  return data;
};

export interface FeedListType {
  title: string;
  area: AreaType;
  salary: number;
  content: string;
  applicants: number;
}

export const useGetFeed = async () => {
  const { data } = await instance.get<{ feed_list: FeedListType[] }>(
    `${router}/admin`,
    { headers: { "Content-Type": "application/json" } }
  );
  return data;
};

interface FeedDetailType {
  id: number;
  image: string;
  title: string;
  money: number;
  age: number;
  job: string; // DEVELOPER, CARE,GUARD,DOCUMENT,COOK,SERVING,DELIVERY,SALES
  area: string; // SEOUL, DAEJEON,INCHEON,GWANGJU,BUSAN,
  day: string;
  start_time: string;
  end_time: string;
  gender: "MALE" | "FEMALE"; // MALE, FEMALE
  content: string;
  phone: string;
  create_date: string;
}

export const useGetDetailFedd = async (feedId: number) => {
  const { data } = await instance.get<FeedDetailType>(
    `${router}/admin/${feedId}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return data;
};
