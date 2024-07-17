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
