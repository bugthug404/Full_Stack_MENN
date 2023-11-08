import axios from "axios";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loaderOpenState } from "./loader-open-state";
import { loggedinUserState } from "./loggedin-user-state";
import { TweetModel } from "./types/tweet-model";
import { useQuery } from "react-query";

export function useTweets() {
  const user = useRecoilValue(loggedinUserState);
  const setLoader = useSetRecoilState(loaderOpenState);

  const { data, refetch } = useQuery("tweetlist", () =>
    axios.get<TweetModel[]>(`${process.env.NEXT_PUBLIC_API}tweets/list`, {
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
        `${process.env.NEXT_PUBLIC_API}tweets/create`,
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
