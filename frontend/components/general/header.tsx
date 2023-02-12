import { useGetAuth } from "@/utils/auth";
import Link from "next/link";
import React from "react";
import Button from "./button";

export default function Header() {
  const auth = useGetAuth();

  return (
    <div className="fixed flex justify-between  px-8 py-4 bg-onBackground w-full">
      {/* <Logo /> */}
      <div className="flex text-background items-center space-x-4">
        <div className="font-bold text-3xl mr-2">Scaptor API</div>
        {/* <div>Home</div> */}
        <Link
          href="/docs"
          className="no-underline hover:underline underline-offset-[20px] hover:underline-offset-4 transition-all ease-in-out duration-300"
        >
          Swagger docs
        </Link>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => {
            auth.logout();
          }}
          className="cursor-pointer text-xl font-bold text-onBackground"
        >
          logout
        </Button>
      </div>
    </div>
  );
}
