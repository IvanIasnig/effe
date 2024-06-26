import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@/styles/global.scss";
import FooterHome from "@/components/common/FooterHome/FooterHome";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FooterHome />
    </>
  );
}

export default appWithTranslation(App);
