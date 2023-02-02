import axios, { ResponseType } from "axios";

export function useGetAuth() {
  function login(data: any, setApiData?: (data: any) => void) {
    axios
      .post("http://localhost:3009/login", data, {
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
          acccept: "application/json",
        },
      })
      .then(function (response) {
        console.log("login response token", response.data.token);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      })
      .catch(function (error: any) {
        console.log("login error", error);
        setApiData && setApiData(error);
      });
  }

  function signup(data: any, setApiData?: (data: any) => void) {
    axios
      .post("http://localhost:3009/signup", data, {
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
          acccept: "application/json",
        },
      })
      .then(function (response: any) {
        console.log("login response", response);
        setApiData && setApiData(response.data?.data?.username ?? "no data");
      })
      .catch(function (error: any) {
        console.log("login error", error);
        setApiData && setApiData(error);
      });
  }

  function testApiCall(setApiData: (data: any) => void) {
    axios
      .get("http://localhost:3009/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("test then res", res);
        setApiData(res.data.data);
      })
      .catch((err) => console.log("test catch error : ", err));
  }

  return { login, signup, testApiCall };
}
