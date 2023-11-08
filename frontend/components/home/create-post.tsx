import { useTweets } from "@/utils/tweets";
import React from "react";
import Button from "../general/button";
import Input from "../general/input";

export default function CreatePost() {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const tweet = useTweets();

  return (
    <div className="flex flex-col w-full max-w-sm space-y-4">
      <Input placeholder="title" Ref={titleRef} />
      <textarea
        className="py-2 pl-4 bg-gray-100 focus:outline-none rounded-xl "
        placeholder="description"
        rows={7}
        ref={descriptionRef}
      />
      <Button
        onClick={() => {
          if (titleRef.current?.value && descriptionRef.current?.value) {
            tweet.createTweet(
              titleRef.current?.value,
              descriptionRef.current?.value
            );
          }
        }}
      >
        Post Tweet
      </Button>
    </div>
  );
}
