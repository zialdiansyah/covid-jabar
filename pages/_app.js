import Head from 'next/head'
import '../styles/tailwind.css'

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
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
