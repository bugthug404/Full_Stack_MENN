import { atom } from "recoil";
import { UserInfo } from "./user-model";

export const loggedinUserState = atom({
  key: "openUserState",
  default: null as UserInfo | null,
});
