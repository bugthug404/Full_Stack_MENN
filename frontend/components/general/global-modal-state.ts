// import { atom, useAtom, useSetAtom } from "jotai";

// export const globalModalOpenState = atom<GlobalModalDataProps>({
//   isOpen: false,
//   onlyMessage: false,
// });

// export interface GlobalModalDataProps {
//   id?: string;
//   isOpen: boolean;
//   isSuccess?: boolean;
//   message?: string;
//   data?: any;
//   isLoading?: boolean;
//   onConfirm?: (b: boolean) => void;
//   onlyMessage?: boolean;
// }

// export function windowConfirm(
//   message: string,
//   setShow: Function,
//   onlyMessage?: boolean
// ) {
//   return new Promise<boolean>((resolve) => {
//     // Set the modal message and open it
//     setShow({
//       isOpen: true,
//       onlyMessage: onlyMessage,
//       message: message,
//     });

//     // Function to handle the user's choice
//     const handleUserChoice = (choice: boolean) => {
//       setShow({ isOpen: false, message: "", onlyMessage }); // Close the modal
//       resolve(choice); // Resolve the promise with the user's choice
//     };

//     // Attach the handleUserChoice function to the globalModalOpenState
//     setShow((prev: any) => ({
//       ...prev,
//       onlyMessage: onlyMessage,
//       onConfirm: handleUserChoice,
//     }));
//   });
// }
