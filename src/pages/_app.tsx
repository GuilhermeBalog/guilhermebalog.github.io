import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5e22af" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />

        <title>Guilherme Balog Gardino | Desenvolvedor de software</title>
        <meta
          name="description"
          content="Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados."
        />
        <meta
          itemProp="name"
          content="Guilherme Balog Gardino | Desenvolvedor de software"
        />
        <meta
          itemProp="description"
          content="Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados."
        />
        <meta
          itemProp="image"
          content="http://avatars0.githubusercontent.com/u/38947601?v=4"
        />
        <meta
          property="og:title"
          content="Guilherme Balog Gardino | Desenvolvedor de software"
        />
        <meta
          property="og:description"
          content="Guilherme is a Software Developer, in love with tech solutions"
        />
        <meta property="og:site_name" content="Guilherme Balog Gardino" />
        <meta property="og:url" content="https://guilhermebalog.ga" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://avatars0.githubusercontent.com/u/38947601?v=4"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="454" />
        <meta property="og:image:height" content="454" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guilherme Balog Gardino | Desenvolvedor de software"
        />
        <meta
          name="twitter:description"
          content="Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados."
        />
        <meta
          name="twitter:image"
          content="http://avatars0.githubusercontent.com/u/38947601?v=4"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
