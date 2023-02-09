import CreatePost from "@/components/home/create-post";
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
        <CreatePost />
        {tweet.data?.data.map((tweet, index) => {
          return <TweetCard heading="234" key={index} />;
        })}

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
