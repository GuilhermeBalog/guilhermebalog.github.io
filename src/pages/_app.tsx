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

        <title>Guilherme Balog Gardino | Software Developer</title>
        <meta
          name="description"
          content="I am a Software Developer, in love with tech solutions"
        />

        <meta
          itemProp="name"
          content="Guilherme Balog Gardino | Software Developer"
        />
        <meta
          itemProp="description"
          content="I am a Software Developer, in love with tech solutions"
        />
        <meta
          itemProp="image"
          content="http://avatars0.githubusercontent.com/u/38947601?v=4"
        />

        <meta
          property="og:title"
          content="Guilherme Balog Gardino | Software Developer"
        />
        <meta
          property="og:description"
          content="Guilherme is a Software Developer, in love with tech solutions"
        />
        <meta property="og:site_name" content="Guilherme Balog Gardino" />
        <meta property="og:url" content="https://guilhermebalog.github.io" />
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
          content="Guilherme Balog Gardino | Software Developer"
        />
        <meta
          name="twitter:description"
          content="I am a Software Developer, in love with tech solutions"
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
