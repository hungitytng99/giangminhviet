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
import { createWrapper } from 'next-redux-wrapper'
import store from '../src/redux/store'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp)
