import { formatDate } from "@/utils/format-date";
import { loggedinUserState } from "@/utils/loggedin-user-state";
import { TweetModel } from "@/utils/types/tweet-model";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";

export default function TweetCard({ tweet }: { tweet: TweetModel }) {
  return (
    <div className="w-full max-w-sm py-2 pl-3 pr-2 space-y-2 border border-black rounded-xl">
      {/* <Loader /> */}
      <div className="text-xl font-bold text-left">{tweet?.title}</div>
      <div className="text-left">{tweet?.description}</div>
      <div className="text-xs text-left opacity-50">
        {formatDate(new Date(tweet?.createdAt ?? ""))}
      </div>
    </div>
  );
}
