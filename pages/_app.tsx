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
        <title>GIANG MINH VIET CO.,LTD</title>
        <meta name="description" content="GIANG MINH VIET COMPANY LIMITED is one of the Vietnamese manufacturers of handicrafts over a past few decades. Our handwoven factory covers 10.000-15.000m2, which specializes in producing different kinds of natural material such as water hyacinth, rattan, bamboo, seagrass, corn and palm leaves. With strict quality control system, our products have been exported to over 20 countries and areas such as: USA, Canada, UK, France, Germany, Australia, New Zealand, Korea, China, Iran, Saudi Arabia, India, Philippines ,^ We offer OEM service and willing to support customer's own design. With our attempt to export Vietnamese handmade products outbound over the years, GIANG MINH VIET CO., LTD is a trustworthy company where you can find a wide variety range of products with high quality and attractive design by sophisticated workmanships but reasonable price! Furthermore, with an enthusiastic and professional working team, we will definitely provide you the best service and after-service ever."></meta>
        <meta name="keywords" content="home decor,wall hanging,wall decor,seagrass basket,wall hangings for home decor,wall hangings for home decor,Placemat,placemats for dining table,placemat woven,seagrass placemat,water hyacinth placemat,natural placemat,wicker charger plates
        ,wall mirror decorative,rattan mirror,rattan furniture,vintage mirror,hand mirror,bamboo tray,bamboo lamp,bamboo basket,bamboo plates"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default MyApp
