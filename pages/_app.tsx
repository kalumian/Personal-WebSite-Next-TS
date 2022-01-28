import type { AppProps } from 'next/app'
import "../styles/dist/all.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
