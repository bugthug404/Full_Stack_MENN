import { useGetAuth } from "@/utils/auth";
import Link from "next/link";
import React from "react";
import Button from "./button";

export default function Header() {
  const auth = useGetAuth();

  return (
    <div className="fixed flex justify-between w-full px-8 py-4 bg-onBackground">
      {/* <Logo /> */}
      <div className="flex items-center space-x-4 text-background">
        <div className="mr-2 text-3xl font-bold">Scaptor API</div>
        {/* <div>Home</div> */}
        <Link href="/docs" className="">
          Swagger docs
        </Link>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={() => {
            auth.logout();
          }}
          className="text-xl font-bold cursor-pointer text-onBackground"
        >
          logout
        </Button>
      </div>
    </div>
  );
}
