import React, { useState } from "react";
import { useGetAuth } from "../utils/auth";

export default function Home() {
  const auth = useGetAuth();
  return (
    <>
      <main className="bg-gray- 800 font-bold flex flex-col space-y-4 justify-center items-center h-screen w-full">
        <div className="space-y-5 text-center">
          <div
            onClick={() => {
              auth.logout();
            }}
            className="cursor-pointer text-xl font-bold"
          >
            logout
          </div>
        </div>
      </main>
    </>
  );
}
