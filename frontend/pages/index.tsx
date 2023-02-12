// import { ButtonBase } from "@scaptorcom/relic-ui-react";
import CreatePost from "@/components/home/create-post";
import TweetCard from "@/components/twitter/tweet-card";
import { useTweets } from "@/utils/tweets";
import { Butterfly_Kids } from "@next/font/google";
import React from "react";
import { useGetAuth } from "../utils/auth";

export default function Home() {
  const auth = useGetAuth();
  const tweet = useTweets();

  const list = tweet.data?.data.reverse();
  console.log("tweet list : ", list);

  return (
    <main className="font-bold flex flex-col space-y-4  h-screen overflow-auto w-full">
      {/* <ButtonBase /> */}
    </main>
  );
}
