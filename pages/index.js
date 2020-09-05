import Head from 'next/head'

export default function Home({ data }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Covid19 Jabar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold text-center mb-20">Covid19 Jabar</h1>
      <div className="flex-col justify-center mb-20">
        <div className="flex-1 rounded overflow-hidden shadow-lg bg-yellow-400 mx-2 mb-4">
          <div className="px-6 py-4 text-center text-xl">
            <div className="font-bold mb-2">Positif</div>
            <div>{data.total_cases.positif || 0}</div>
            {
              data.today_cases.positif ?
                <div className="inline-flex items-center text-sm">
                  (
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{data.today_cases.positif}</span>
                  )
                </div>
                :
                ''
            }
          </div>
        </div>
        <div className="flex-1 rounded overflow-hidden shadow-lg bg-red-500 mx-2 mb-4">
          <div className="px-6 py-4 text-center text-xl">
            <div className="font-bold mb-2">Wafat</div>
            <div>{data.total_cases.meninggal || 0}</div>
            {
              data.today_cases.meninggal ?
                <div className="inline-flex items-center  text-sm">
                  (
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" fill="currentColor">
                    <path d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  <span>{data.today_cases.meninggal}</span>
                  )
                </div>
                :
                ''
            }
          </div>
        </div>
        <div className="flex-1 rounded overflow-hidden shadow-lg bg-green-500 mx-2">
          <div className="px-6 py-4 text-center text-xl">
            <div className="font-bold mb-2">Pulih</div>
            <div>{data.total_cases.sembuh || 0}</div>
            {
              data.today_cases.sembuh ?
                <div className="inline-flex items-center text-sm">
                  (
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{data.today_cases.sembuh}</span>
                  )
                </div>
                :
                ''
            }
          </div>
        </div>
      </div>
      <div className="text-sm text-center mb-4">Data from <a href="https://covid19-public.digitalservice.id/api/v1/">Pikobar Jabar</a></div>
      <div className="text-sm text-center">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://covid-jabar.vercel.app/api/covid_jabar`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
