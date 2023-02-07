import { AuthProvider } from "@/components/general/auth-provider";
import { LoadingScreen } from "@/components/general/loader";
import "@/styles/globals.css";
import "@/styles/loader.module.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <LoadingScreen />
        <AuthProvider>
          <Component {...pageProps} />;
        </AuthProvider>
      </RecoilRoot>
    </>
  );
}
