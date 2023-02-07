import Image from "next/image";
import React from "react";
import { Loader } from "../general/loader";

export default function TweetCard() {
  return (
    <div className="w-[300px] border border-black rounded-xl p-2 space-y-2">
      {/* <Loader /> */}
      <div className="text-xl font-bold ">This is Heading</div>
      <div className="text-left pl-1">
        This will be the paragarph that we need to design like a god or you can
        say jod because its an mern stack applicastion which needs to be look
        good ok ? Thanks
      </div>
    </div>
  );
}
