import type { AppProps } from "next/app";
import { Bebas_Neue } from "next/font/google";
import styled from "styled-components";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Main = styled.main`
  margin: 2rem;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main className={bebas.className}>
      <Component {...pageProps} />
    </Main>
  );
}
