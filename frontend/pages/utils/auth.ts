import axios, { ResponseType } from "axios";

export function useGetAuth() {
  function login(data: any) {
    axios
      .post("http://localhost:3009/login", {
        data,
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
        },
      })
      .then(function (response: any) {
        console.log("response", response);
      })
      .catch(function (error: any) {
        console.log("error", error);
      });
  }

  function testApiCall(setApiData: (data: any) => void) {
    axios
      .post("http://localhost:3009/login", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(".then res", res);
        setApiData(res.data.data);
      })
      .catch((err) => console.log("catch error : ", err));
  }

  return { login, testApiCall };
}
