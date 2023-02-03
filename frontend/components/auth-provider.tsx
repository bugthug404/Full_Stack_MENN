import { loaderOpenState } from "@/utils/loader-open-state";
import { loggedinUserState } from "@/utils/loggedin-user-state";
import { User, UserInfo } from "@/utils/user-model";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export function AuthProvider(props: { children: React.ReactNode }) {
  const pid = useRouter().route;
  const [loaderOpen, setLoaderOpen] = useRecoilState(loaderOpenState);
  const [currentUser, setCurrentUser] = useRecoilState(loggedinUserState);
  const router = useRouter();
  const proutes = ["/signin", "/signup", "/forgot-password", "/reset-password"];

  useEffect(() => {
    console.log("auth-provider.tsx useEffect");
    const isPublicRoute = proutes.includes(router.pathname);
    console.log("isPublicRoute", isPublicRoute);

    if (!currentUser) {
      const data: UserInfo = JSON.parse(
        localStorage.getItem("userInfo") ?? "{}"
      );
      console.log("setting current user");
      data?.token && setCurrentUser(data);
    }
    if (currentUser?.token && isPublicRoute) {
      console.log("isPublicRoute", isPublicRoute);
      if (currentUser?.token) {
        console.log("token", currentUser?.token);
        router.push("/");
      }
    } else if (!currentUser?.token && !isPublicRoute) {
      console.log("token", currentUser?.token);
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  if (currentUser?.token) {
    return <>{props.children}</>;
  } else {
    console.log("currentUser", currentUser);
    return <>{props.children}</>;
  }
}
