import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeSwitchProvider } from '../contexts/ThemeSwitchContext';
import { App } from '../styles/App';

import { GlobalStyle } from '../styles/global';

const title = 'Guilherme Balog Gardino | Desenvolvedor de software';
const description =
  'Olá! Meu nome é Guilherme Balog Gardino e sou desenvolvedor de software em São Paulo, Brasil. Trabalho principalmente como programador fullstack usando Node.js e React.js, mas gosto muito de experimentar diferentes ferramentas e linguagens e com elas construir projetos inusitados.';
const image = 'https://avatars0.githubusercontent.com/u/38947601?v=4';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeSwitchProvider>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00BCD4" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Guilherme Balog Gardino" />
        <meta property="og:url" content="https://guilhermebalog.ga" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="460" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <GlobalStyle />

      <App>
        <Component {...pageProps} />
      </App>
    </ThemeSwitchProvider>
  );
}
