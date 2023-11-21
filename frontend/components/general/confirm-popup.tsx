import React from "react";
import Button from "./button";
import { useGlobalModalStore } from "./global-modal-handler";

export default function GlobalConfirmModal() {
  const state = useGlobalModalStore();
  return (
    <>
      {state.isOpen && (
        <div className="fixed z-50 flex flex-col items-center w-full h-full bg-black bg-opacity-50 ">
          <div className="w-full max-w-md p-5 mt-auto mb-auto bg-white rounded-lg">
            <div
              className={`text-2xl font-bold mb-5 ${
                !state.onlyMessage ? "block" : "hidden"
              }`}
            >
              Confirm your action
            </div>
            <div>{state.message}</div>
            <div className="flex gap-5 mt-5">
              <Button
                onClick={() => {
                  state.onConfirm && state.onConfirm(true);
                }}
              >
                Ok
              </Button>
              {!state.onlyMessage && (
                <Button
                  onClick={() => {
                    state.onConfirm && state.onConfirm(false);
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
