// vendor
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'bootstrap/dist/css/bootstrap.css'
// my css
import 'src/styles/_base_styles.sass'
import 'src/styles/globals.sass'
// provider - redux
import { Provider } from 'react-redux';
import store from 'src/data-stores/store'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
  )
};

export default MyApp
