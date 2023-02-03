import { loaderOpenState } from "@/utils/loader-open-state";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export function Loader() {
  const open = useRecoilValue(loaderOpenState);

  return (
    <>
      {open && (
        <div
          className={` absolute inset-0 flex items-center justify-center h-screen w-full bg-white/95`}
        >
          <div className="dots-bars-6"></div>
        </div>
      )}
    </>
  );
}
