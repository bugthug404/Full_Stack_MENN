import { loaderOpenState } from "@/utils/loader-open-state";
import { loggedinUserState } from "@/utils/loggedin-user-state";
import { User, UserInfo } from "@/utils/user-model";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export function AuthProvider(props: { children: React.ReactNode }) {
  const setLoaderOpen = useSetRecoilState(loaderOpenState);
  const [currentUser, setCurrentUser] = useRecoilState(loggedinUserState);
  const router = useRouter();
  const publicpath = [
    "/signin",
    "/signup",
    "/forgot-password",
    "/reset-password",
  ];

  useEffect(() => {
    // console.log("AuthProvider useEffect", router.pathname);
    setLoaderOpen(true);
    let isPublicRoute = publicpath.includes(router.pathname);

    if (!currentUser) {
      const data: UserInfo = JSON.parse(
        localStorage.getItem("userInfo") ?? "{}"
      );
      data?.token && setCurrentUser(data);
    } else {
      if (currentUser?.token && isPublicRoute) {
        if (currentUser?.token) {
          alert("You are already logged in" + isPublicRoute + router.pathname);
          router.push("/home");
        }
      } else if (!currentUser?.token && !isPublicRoute) {
        router.push("/signin");
      }
    }
    setLoaderOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, router.pathname]);

  if (currentUser?.token && !publicpath.includes(router.pathname)) {
    return <>{props.children}</>;
  } else if (!currentUser?.token && publicpath.includes(router.pathname)) {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
}
