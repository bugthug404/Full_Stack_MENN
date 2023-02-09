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
  const proutes = ["/signin", "/signup", "/forgot-password", "/reset-password"];

  useEffect(() => {
    console.log("AuthProvider useEffect", router.pathname);
    setLoaderOpen(true);
    const isPublicRoute = proutes.includes(router.pathname);

    if (!currentUser) {
      const data: UserInfo = JSON.parse(
        localStorage.getItem("userInfo") ?? "{}"
      );
      data?.token && setCurrentUser(data);
    }
    if (currentUser?.token && isPublicRoute) {
      if (currentUser?.token) {
        router.push("/");
      }
    } else if (!currentUser?.token && !isPublicRoute) {
      router.push("/signin");
    }
    setLoaderOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, router.pathname]);

  if (currentUser?.token && !proutes.includes(router.pathname)) {
    return <>{props.children}</>;
  } else if (!currentUser?.token && proutes.includes(router.pathname)) {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
}