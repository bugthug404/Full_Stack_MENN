import CreatePost from "@/components/home/create-post";
import TweetCard from "@/components/twitter/tweet-card";
import { useTweets } from "@/utils/tweets";
import React, { useEffect } from "react";
import { TweetModel } from "@/utils/types/tweet-model";
import Header from "@/components/general/header";

export default function HomePage() {
  const tweet = useTweets();
  const [list, setList] = React.useState<TweetModel[]>([]);

  useEffect(() => {
    const l = tweet.data?.data.slice(0, 5);
    console.log("tweet list : ", l?.[0].title);
    setList(l ?? []);
  }, [tweet.data?.data]);

  return (
    <main className="font-bold flex flex-col space-y-4 bg-background text-onBackground overflow-auto w-full">
      <Header />
      <div className="space-y-5 text-center flex flex-col items-center pt-20">
        <CreatePost />
        {list?.map((tweet, index) => {
          return <TweetCard tweet={tweet} key={index} />;
        })}
      </div>
    </main>
  );
}
