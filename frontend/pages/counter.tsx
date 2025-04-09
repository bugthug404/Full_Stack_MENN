import { customWindowConfirm } from "@/components/general/global-modal-handler";
import React from "react";

export default function Counter() {
  return (
    <div className="flex justify-center pt-10 ">
      <button
        onClick={async () => {
          const n = await customWindowConfirm("Are you sure?");
        }}
        className="px-10 py-2 font-semibold cursor-pointer select-none rounded-xl bg-zinc-200"
      >
        Show Popup
      </button>
    </div>
  );
}
