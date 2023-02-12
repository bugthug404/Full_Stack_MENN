import { formatDate } from "@/utils/format-date";
import { loggedinUserState } from "@/utils/loggedin-user-state";
import { TweetModel } from "@/utils/types/tweet-model";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";

export default function TweetCard({ tweet }: { tweet: TweetModel }) {
  return (
    <div className="w-[300px] border border-black rounded-xl pl-3 pr-2 py-2 space-y-2">
      {/* <Loader /> */}
      <div className="text-xl text-left">{tweet?.title}</div>
      <div className="text-left">{tweet?.description}</div>
      <div className="text-left">
        {formatDate(new Date(tweet?.createdAt ?? ""))}
      </div>
    </div>
  );
}
