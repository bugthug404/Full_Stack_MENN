import React from "react";

export default function Button({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={`font-semibold px-10 py-2 rounded-xl cursor-pointer select-none bg-zinc-200 ${className}`}
    >
      {children}
    </div>
  );
}
