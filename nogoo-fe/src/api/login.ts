import axios from "axios";
import { instance } from "./axios";

export async function login() {
  const res = await instance.post("/users/signin", {
    account_id: "asdf1234",
    password: "aa1234aaA!",
  });
  console.log(res);
}
