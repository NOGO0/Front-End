import { useCookies } from "react-cookie";
import { RequestType } from "../../pages/signup/signup";
import { AreaEnum } from "../../util/enum";
import { instance } from "../axios";

interface LoginType {
  account_id: string;
  password: string;
}

export function useLogin() {
  const [, setCookie] = useCookies();
  async function login(body: LoginType) {
    await instance.post("/users/signin", body).then(({ data }) => {
      setCookie("access_token", data.access_token);
    });
  }
  return [login];
}

export async function useSignup(body: RequestType) {
  await instance.post("/users", {
    ...body,
    age: Number(body.age),
    area: body.area.map((area) => AreaEnum[area]),
    skill: ["DEVELOPER"],
  });
}
