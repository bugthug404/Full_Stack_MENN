import axios from "axios";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderOpenState } from "./loader-open-state";
import { loggedinUserState } from "./loggedin-user-state";
import { TweetModel } from "./types/tweet-model";
import { useQuery } from "react-query";

export function useTweets() {
  const user = useRecoilValue(loggedinUserState);
  const [userTweets, setUserTweets] = useState([]);
  const setLoader = useSetRecoilState(loaderOpenState);

  const { data, refetch } = useQuery("tweets", () =>
    axios.get<TweetModel[]>(`${process.env.NEXT_PUBLIC_API}tweets`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user?.token}`,
      },
    })
  );

  function createTweet(title: string, description: string) {
    setLoader(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API}tweets`,
        {
          tweet: {
            title: title,
            description: description,
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
        refetch();
      })
      .catch((err) => {
        console.log("erro.r", err);
        setLoader(false);
      });
  }

  return { data, createTweet };
}
