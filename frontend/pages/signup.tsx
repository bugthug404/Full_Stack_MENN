import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import axios from "axios";
import { useGetAuth } from "./utils/auth";
import Header from "@/src/head";
import Input from "@/src/input";

const inter = Inter({ subsets: ["latin"] });

export default function SignUp() {
  const [apiData, setApiData] = useState<any>(null);
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const auth = useGetAuth();
  return (
    <>
      <div className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
        <div className="flex flex-col space-y-2">
          {/* convert above input to Input */}
          <Input placeholder="name" value="mr bob" Ref={userNameRef} />
          <Input placeholder="email" value="bob@mail.com" Ref={emailRef} />
          <Input placeholder="password" value="password" Ref={passwordRef} />
        </div>

        <p className="text-sm">
          <a href="/signin"> go to Sign in</a>
        </p>

        <div className="flex gap-x-4 pt-2">
          <button
            className="bg-blue-100 px-6 py-2 rounded-xl active:bg-red-200"
            onClick={() => {
              const data = {
                name: userNameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
              };
              auth.signup(data);
            }}
          >
            Submit
          </button>
          <button
            className="bg-red-100 px-6 py-2 rounded-xl active:bg-red-200 "
            onClick={() => {
              auth.testApiCall(setApiData);
            }}
          >
            Api call
          </button>
        </div>
        {/* <div className="w-[400px] border border-black rounded-xl p-4 space-y-4">
          <div>api response :</div>
          <div>{apiData ?? "nothing"}</div>
        </div> */}
      </div>
    </>
  );
}