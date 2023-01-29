import React from "react";

export default function Input({
  Ref,
  value,
  placeholder,
  className,
}: {
  Ref: React.RefObject<HTMLInputElement>;
  value: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      ref={Ref}
      value={value}
      className={
        "pl-4 py-2 focus:outline-none bg-gray-100 rounded-xl" + className
      }
    />
  );
}
