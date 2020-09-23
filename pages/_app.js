import Head from 'next/head'
import '../styles/tailwind.css'
import '../styles/loading.css'

const APP_NAME = "CovidJabar"
const APP_DESCRIPTION = "Jawa Barat Covid Tracker"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Covid19 Jabar</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name="keywords" content="Covid, Jabar" />
        <meta name='format-detection' content='telephone=no' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <meta name='application-name' content={APP_NAME} />

        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#48BB78' />
        
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <link rel='apple-touch-icon' sizes='192x192' href='/icons/apple-touch-icon.png' />
        
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css" />
      </Head>
      <Component {...pageProps} />
      <div className="text-sm text-center mt-15">Data from <a className="text-blue-700" href="https://covid19-public.digitalservice.id/api/v1/">Pikobar Jabar</a> & <a className="text-blue-700" href="https://dekontaminasi.com">Dekontaminasi</a></div>
    </div>
  )
}

export default MyApp
