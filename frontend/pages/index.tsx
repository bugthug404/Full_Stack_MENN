import TweetCard from "@/components/twitter/tweet-card";
import { useTweets } from "@/utils/tweets";
import { Butterfly_Kids } from "@next/font/google";
import React from "react";
import { useGetAuth } from "../utils/auth";

export default function Home() {
  const auth = useGetAuth();
  const tweet = useTweets();

  return (
    <main className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
      <div className="space-y-5 text-center flex flex-col items-center">
        <TweetCard heading="234" />
        <div
          onClick={() => {
            tweet.getUserTweets();
          }}
          className="font-semibold px-10 py-2 rounded-xl cursor-pointer select-none bg-zinc-200"
        >
          get
        </div>
        <div
          onClick={() => {
            tweet.createTweet();
          }}
          className="font-semibold px-10 py-2 rounded-xl cursor-pointer select-none bg-zinc-200"
        >
          post
        </div>
        <div
          onClick={() => {
            auth.logout();
          }}
          className="cursor-pointer text-xl font-bold"
        >
          logout
        </div>
      </div>
    </main>
  );
}
