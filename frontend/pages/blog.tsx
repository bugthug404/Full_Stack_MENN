// writing blog for explaining article below also
// add more explaination for zustand & its use in this case
// add explain how promise function working in this code.
// add comments where necessary
// Step 1: Install Dependencies
// Firstly, make sure you have the necessary packages installed. You'll need react and zustand. If not installed, you can use the following commands:

// bash
// Copy code
// npm install react zustand
// Step 2: Create Modal Component (confirm-popup.tsx)
// Create a file named confirm-popup.tsx and define your custom confirm modal component. This component uses the useGlobalModalStore hook from global-modal-handler.ts.

// tsx
// Copy code
// // confirm-popup.tsx

// import React from "react";
// import Button from "./button";
// import { useGlobalModalStore } from "./global-modal-handler";

// export default function GlobalConfirmModal() {
//   const state = useGlobalModalStore();

//   return (
//     <>
//       {state.isOpen && (
//         <div className="fixed z-50 flex flex-col items-center w-full h-full bg-black bg-opacity-50 ">
//           <div className="w-full max-w-md p-5 mt-auto mb-auto bg-white rounded-lg">
//             <div
//               className={`text-2xl font-bold mb-5 ${
//                 !state.onlyMessage ? "block" : "hidden"
//               }`}
//             >
//               Confirm your action
//             </div>
//             <div>{state.message}</div>
//             <div className="flex gap-5 mt-5">
//               <Button
//                 onClick={() => {
//                   state.onConfirm && state.onConfirm(true);
//                 }}
//               >
//                 Ok
//               </Button>
//               {!state.onlyMessage && (
//                 <Button
//                   onClick={() => {
//                     state.onConfirm && state.onConfirm(false);
//                   }}
//                 >
//                   Cancel
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// Step 3: Create Global Modal Handler (global-modal-handler.ts)
// Create a file named global-modal-handler.ts for managing the global state of the modal.

// tsx
// Copy code
// // global-modal-handler.ts

// import { create } from "zustand";

// interface State {
//   isOpen: boolean;
//   message?: string;
//   onConfirm?: (b: boolean) => void;
//   onlyMessage?: boolean;
//   openModal: (
//     message: string,
//     onlyMessage?: boolean,
//     onConfirm?: (b: boolean) => void
//   ) => void;
//   closeModal: () => void;
// }

// export const useGlobalModalStore = create<State>((set) => ({
//   isOpen: false,
//   onlyMessage: false,
//   openModal: (message, onlyMessage = false, onConfirm) =>
//     set({ isOpen: true, message, onlyMessage, onConfirm }),
//   closeModal: () =>
//     set({
//       isOpen: false,
//       message: "",
//       onlyMessage: false,
//       onConfirm: undefined,
//     }),
// }));

// export function customWindowConfirm(message: string, onlyMessage?: boolean) {
//   return new Promise<boolean>((resolve) => {
//     const { openModal, closeModal } = useGlobalModalStore.getState();

//     const handleUserChoice = (choice: boolean) => {
//       closeModal();
//       resolve(choice);
//     };

//     openModal(message, onlyMessage, handleUserChoice);
//   });
// }

// export function customAlert(message: string, onlyMessage?: boolean) {
//   return new Promise<boolean>((resolve) => {
//     const { openModal, closeModal } = useGlobalModalStore.getState();

//     const handleUserChoice = (choice: boolean) => {
//       closeModal();
//       resolve(choice);
//     };

//     openModal(message, onlyMessage, handleUserChoice);
//   });
// }
// Step 4: Use the Modal in Your Component (app.tsx)
// Finally, use the custom confirm modal in your React component.

// tsx
// Copy code
// // app.tsx

// import { customWindowConfirm } from "@/components/general/global-modal-handler";
// import React from "react";

// export default function Counter() {
//   return (
//     <div className="flex justify-center pt-10 ">
//       <button
//         onClick={async () => {
//           const n = await customWindowConfirm("Are you sure?");
//         }}
//         className="px-10 py-2 font-semibold cursor-pointer select-none rounded-xl bg-zinc-200"
//       >
//         Show Popup
//       </button>
//     </div>
//   );
// }
// Explanations:
// confirm-popup.tsx: This file defines the structure and behavior of the custom confirm modal using React and Tailwind CSS.

// global-modal-handler.ts: Manages the global state using Zustand, including functions to open and close the modal, and custom confirm and alert functions.

// app.tsx: Demonstrates how to use the custom confirm modal in a React component.

// Make sure to adjust styles, paths, and other details according to your project structure. If you have any questions about specific parts of the code or need further clarification, feel free to ask.

import React from "react";
import Markdown from "react-markdown";

export default function Blog() {
  const confirmPopup = `# import React from "react";
  # import Button from "./button";\n
  # import { useGlobalModalStore } from "./global-modal-handler";
   \n
   export default function GlobalConfirmModal() {
     const state = useGlobalModalStore();
     \n
     return (
        <>
          {state.isOpen && (
            <div className="fixed z-50 flex flex-col items-center w-full h-full bg-black bg-opacity-50 ">
              <div className="w-full max-w-md p-5 mt-auto mb-auto bg-white rounded-lg">
                <div
                  className={\`text-2xl font-bold mb-5 \${
                    !state.onlyMessage ? "block" : "hidden"
                  }\`}
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
    `;

  const globalModalHandler = `# import { create } from "zustand";
    # interface State {
    #   isOpen: boolean;
    #   message?: string;
    #   onConfirm?: (b: boolean) => void;
    #   onlyMessage?: boolean;
    #   openModal: (
    #     message: string,
    #     onlyMessage?: boolean,
    #     onConfirm?: (b: boolean) => void
    #   ) => void;
    #   closeModal: () => void;
    # }
    \n
    # export const useGlobalModalStore = create<State>((set) => ({
    #   isOpen: false,
    #   onlyMessage: false,
    #   openModal: (message, onlyMessage = false, onConfirm) =>
    #     set({ isOpen: true, message, onlyMessage, onConfirm }),
    #   closeModal: () =>
    #     set({
    #       isOpen: false,
    #       message: "",
    #       onlyMessage: false,
    #       onConfirm: undefined,
    #     }),
    # }));
    \n
    # export function customWindowConfirm(message: string, onlyMessage?: boolean) {
    #   return new Promise<boolean>((resolve) => {
    #     const { openModal, closeModal } = useGlobalModalStore.getState();
    \n
    #     const handleUserChoice = (choice: boolean) => {
    #       closeModal();
    #       resolve(choice);
    #     };
    \n
    #     openModal(message, onlyMessage, handleUserChoice);
    #   });
    # }
    \n
    # export function customAlert(message: string, onlyMessage?: boolean) {
    #   return new Promise<boolean>((resolve) => {
    #     const { openModal, closeModal } = useGlobalModalStore.getState();
    \n
    #     const handleUserChoice = (choice: boolean) => {
    #       closeModal();
    #       resolve(choice);
    #     };
    \n
    #     openModal(message, onlyMessage, handleUserChoice);
    #   });
    # }
    `;

  const app = `# import { customWindowConfirm } from "@/components/general/global-modal-handler";
    # import React from "react";
    \n
    # export default function Counter() {
    #   return (
    #     <div className="flex justify-center pt-10 ">
    #       <button
    #         onClick={async () => {
    #           const n = await customWindowConfirm("Are you sure?");
    #         }}
    #         className="px-10 py-2 font-semibold cursor-pointer select-none rounded-xl bg-zinc-200"
    #       >
    #         Show Popup
    #       </button>
    #     </div>
    #   );
    # }
    `;

  return (
    <div className="max-w-6xl p-4">
      <h1 className="text-2xl font-bold">
        how to create cutom window confirm popup in react
      </h1>

      <p className="mt-10">
        In this article we will discuss how to replace alert() &
        window.confirm() with custom component with same functionality
      </p>

      <p className="mt-10">
        We will create a custom confirm popup using zustand
      </p>

      <div className="p-4 mt-10 rounded-lg bg-slate-300">
        <li className="list-disc ">
          confirm-popup.tsx: This file defines the structure and behavior of the
          custom confirm modal using React and Tailwind CSS.
        </li>

        <li className="mt-2 list-disc">
          global-modal-handler.ts: Manages the global state using Zustand,
          including functions to open and close the modal, and custom confirm
          and alert functions.
        </li>

        <li className="mt-2 list-disc">
          app.tsx: Demonstrates how to use the custom confirm modal in a React
          component.
        </li>
      </div>

      {/* step 1*/}

      <p className="mt-10">Step 1: Install Dependencies</p>

      {/* code  */}

      <div className="p-4 mt-2 bg-black rounded-lg">
        <p className="text-green-400">npm install react zustand</p>
      </div>

      {/* step 2*/}

      <p className="mt-10">
        Step 2: Create Modal Component (confirm-popup.tsx)
      </p>

      {/* code  */}

      <div className="p-4 mt-2 text-green-400 bg-black rounded-lg">
        <Markdown>{confirmPopup}</Markdown>
      </div>

      {/* step 3*/}

      <p className="mt-10">
        Step 3: Create Global Modal Handler (global-modal-handler.ts)
      </p>

      {/* code  */}
      <div className="p-4 mt-2 text-green-400 bg-black rounded-lg">
        <Markdown>{globalModalHandler}</Markdown>
      </div>

      {/* step 4*/}
      <p className="mt-10">Step 4: Use the Modal in Your Component (app.tsx)</p>

      {/* code  */}
      <div className="p-4 mt-2 text-green-400 bg-black rounded-lg">
        <Markdown>{app}</Markdown>
      </div>
    </div>
  );
}
