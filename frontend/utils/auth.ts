import axios, { ResponseType } from "axios";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { loaderOpenState } from "./loader-open-state";
import { loggedinUserState } from "./loggedin-user-state";

export function useGetAuth() {
  const router = useRouter();
  const setLoader = useSetRecoilState(loaderOpenState);
  const setCurrentUser = useSetRecoilState(loggedinUserState);

  function login(data: any, setApiData?: (data: any) => void) {
    setLoader(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}login`, data, {
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
          acccept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function (response) {
        console.log("login response token", response.data);
        if (response.data?.token) {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          router.push("/");
        }
        setLoader(false);
      })
      .catch(function (error: any) {
        console.log("login error", error);
        setApiData && setApiData(error);
        setLoader(false);
      });
  }

  function signup(data: any) {
    setLoader(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API}signup`, data, {
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
          acccept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setLoader(false);
        if (response.status === 201 && response.data?.token) {
          router.push("/signin");
        }
      })
      .catch((error) => {
        setLoader(false);
      });
  }

  function testApiCall() {
    setLoader(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("test then res", res);

        res.data.data && alert(`Api Response : ${res.data.data}`);
        setLoader(false);
      })
      .catch((err) => {
        console.log("test catch error : ", err);

        err.message && alert(`Api Response : ${err.message ?? "no data"}`);
        setLoader(false);
      });
  }

  function logout() {
    setLoader(true);
    localStorage.removeItem("userInfo");
    router.push("/signin");
    setCurrentUser(null);
    setLoader(false);
  }
  return { login, signup, testApiCall, logout };
}
