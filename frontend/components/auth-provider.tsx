import { useRouter } from "next/router";
import React from "react";

export function AuthProvider() {
  const { pid } = useRouter().query;

  return (
    <div>
      <h1>{pid}</h1>
    </div>
  );
}
