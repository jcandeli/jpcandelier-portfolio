import Navigation from "@/components/Navigation";
import styled, { createGlobalStyle } from "styled-components";
import { Bebas_Neue, Roboto } from "next/font/google";
import type { AppProps } from "next/app";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Main = styled.main`
  margin: 2rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  h2, p {
    ${roboto.style}
   }
  h1, h2, p {
    margin-block-start: 0;
    margin-block-end: 0.15rem;
  }
`;

const Header = styled.h1`
  font-size: min(23vw, 326px);
  line-height: 0.85;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Main className={bebas.className}>
        <Navigation />
        <Header>JP Candelier</Header>
        <Component {...pageProps} />
      </Main>
    </Container>
  );
}

// font-size: min(23vw, 326px);
