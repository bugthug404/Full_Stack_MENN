import { loaderOpenState } from "@/utils/loader-open-state";
import { loggedinUserState } from "@/utils/loggedin-user-state";
import { User, UserInfo } from "@/utils/user-model";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export function AuthProvider(props: { children: React.ReactNode }) {
  const pid = useRouter().route;
  const loaderOpen = useSetRecoilState(loaderOpenState);
  const [currentUser, setCurrentUser] = useRecoilState(loggedinUserState);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      loaderOpen(false);
      router.push("/");
    } else {
      loaderOpen(true);
      const data: UserInfo = JSON.parse(
        localStorage.getItem("userInfo") ?? "{}"
      );
      setCurrentUser(data);
    }
  }, [currentUser]);

  return <div>{props.children}</div>;
}
