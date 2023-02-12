import { AuthProvider } from "@/components/general/auth-provider";
import { LoadingScreen } from "@/components/general/loader";
import "@/styles/globals.css";
import "@/styles/loader.module.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
// import "@scaptorcom/relic-ui-react/dist/esm/theme/theme.css";
// import "@scaptorcom/relic-ui-react/dist/esm/theme/fonts.css";
// import "@scaptorcom/relic-ui-react/dist/esm/theme/packs/t1.css";
// import "@scaptorcom/relic-ui-react/dist/esm/theme/packs/t2.css";
// import "@scaptorcom/relic-ui-react/dist/index.css";
// import { ThemeProvider } from "@/../relic-ui-react/dist";
import Watermark from "@/components/general/watermark";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {/* <ThemeProvider> */}
          {/* add class name to click through */}
          <Watermark />
          <LoadingScreen />
          <AuthProvider>
            <Component {...pageProps} />;
          </AuthProvider>
          {/* </ThemeProvider> */}
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
