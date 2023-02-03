import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
import axios from "axios";
import { useGetAuth } from "../utils/auth";
import Header from "@/src/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [apiData, setApiData] = useState<any>(null);
  const userNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const auth = useGetAuth();
  return (
    <>
      <main className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
        <div className="space-y-5 text-center">
          <div
            onClick={() => {
              auth.logout();
            }}
          >
            logout
          </div>
        </div>
      </main>
    </>
  );
}
