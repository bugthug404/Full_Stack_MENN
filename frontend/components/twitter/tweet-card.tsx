import { loggedinUserState } from "@/utils/loggedin-user-state";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";

export default function TweetCard({ heading }: { heading: string }) {
  return (
    <div className="w-[300px] border border-black rounded-xl pl-3 pr-2 py-2 space-y-2">
      {/* <Loader /> */}
      <div className="text-xl text-left">{heading}</div>
      <div className="text-left">{heading}</div>
    </div>
  );
}
