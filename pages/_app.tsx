// vendor
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.css'
// my css
import 'src/styles/_base_styles.sass'
import 'src/styles/globals.sass'
import Head from 'next/head'

// provider - redux
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>Giang minh viet</title>
        <meta name="description" content="Free Web tutorials"></meta>
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="robots" content="noindex" />
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp
