import axios from "axios";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderOpenState } from "./loader-open-state";
import { loggedinUserState } from "./loggedin-user-state";

export function useTweets() {
  const user = useRecoilValue(loggedinUserState);
  const [userTweets, setUserTweets] = useState([]);
  const setLoader = useSetRecoilState(loaderOpenState);

  function getUserTweets() {
    setLoader(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}tweets`, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => {
        setUserTweets(res.data);
        console.log("res.data", res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log("erro.r", err);
        setLoader(false);
      });
  }

  function createTweet() {
    setLoader(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}tweets`,
        {
          tweet: {
            title: "test tweet",
            description: "test description",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${user?.token}`,
          },
        }
      )
      .then((res) => {
        setUserTweets(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log("erro.r", err);
        setLoader(false);
      });
  }

  return { userTweets, getUserTweets, createTweet };
}
