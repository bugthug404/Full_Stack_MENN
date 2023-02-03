import { AuthProvider } from "@/components/auth-provider";
import { Loader } from "@/components/loader";
import "@/styles/globals.css";
import "@/styles/loader.module.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Loader />
        <AuthProvider>
          <Component {...pageProps} />;
        </AuthProvider>
      </RecoilRoot>
    </>
  );
}
