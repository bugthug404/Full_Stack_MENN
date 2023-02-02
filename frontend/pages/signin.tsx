import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import axios from "axios";
import { useGetAuth } from "../utils/auth";
import Header from "@/src/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function SignIn() {
  const [apiData, setApiData] = useState<any>(null);
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const auth = useGetAuth();
  return (
    <>
      <div className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
        <div className="flex flex-col space-y-2">
          <div className="text-center text-3xl font-semibold mb-10">
            Login Form
          </div>
          <input
            type="text"
            placeholder="bob@mail.com"
            ref={userNameRef}
            value="bob@mail.com"
            className="pl-4 py-2 focus:outline-none bg-gray-100 rounded-xl"
          />
          <input
            type="text"
            placeholder="password"
            value="password"
            ref={passwordRef}
            className="pl-4 py-2 focus:outline-none bg-gray-100 rounded-xl"
          />
        </div>

        <div className="flex gap-x-4 pt-2">
          <button
            className="bg-blue-100 px-6 py-2 rounded-xl active:bg-red-200"
            onClick={() => {
              const data = {
                email: userNameRef.current?.value,
                password: passwordRef.current?.value,
              };
              auth.login(data);
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
        <p className="text-sm">
          <Link href="/signup">go to Sign up</Link>
        </p>
      </div>
    </>
  );
}
