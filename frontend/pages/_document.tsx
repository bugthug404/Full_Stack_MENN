import { LoadingScreen } from "@/components/general/loader";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
