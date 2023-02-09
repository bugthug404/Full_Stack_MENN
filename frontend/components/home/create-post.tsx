import { useTweets } from "@/utils/tweets";
import React from "react";
import Button from "../general/button";
import Input from "../general/input";

export default function CreatePost() {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLInputElement>(null);
  const tweet = useTweets();

  return (
    <div className="flex flex-col space-y-4">
      <Input placeholder="title" Ref={titleRef} />
      <Input placeholder="description" Ref={descriptionRef} />
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
