import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [apiData, setApiData] = useState<any>(null);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <div className="flex gap-x-4 pt-2">
          <button
            className="bg-blue-100 px-6 py-2 rounded-xl active:bg-red-200"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Submit
          </button>
          <button
            className="bg-red-100 px-6 py-2 rounded-xl active:bg-red-200 "
            onClick={async () => {
              axios
                .post("http://localhost:3009/", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                .then((res) => {
                  console.log(".then res", res);
                  setApiData(res.data.data);
                })
                .catch((err) => console.log("catch error : ", err));
            }}
          >
            Api call
          </button>
        </div>
        <div className="w-[400px] border border-black rounded-xl p-4 space-y-4">
          <div>api response :</div>
          <div>{apiData ?? "nothing"}</div>
        </div>
      </main>
    </>
  );
}
