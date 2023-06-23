import Navigation from "@/components/Navigation";
import styled from "styled-components";
import { Bebas_Neue } from "next/font/google";
import type { AppProps } from "next/app";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Main = styled.main`
  margin: 2rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Main className={bebas.className}>
        <Navigation activePage="Home" />
        <Component {...pageProps} />
      </Main>
    </Container>
  );
}
