
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSwr from 'swr'
import Arrow from '../components/arrow'
import Card from '../components/card'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function Home() {
  const { data, error } = useSwr('/api/covid_jabar', fetcher)

  if (error) return <div className="text-center text-xl font-bold">Gagal Memuat data</div>
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold text-center my-4">Covid19 di Jawa Barat per hari ini:</h1>
      {
        data
        ?
        <div className="flex-col justify-center mb-5">
        <Card title="Total Kasus" color="bg-yellow-400 ">
          <div>{data.total_cases.positif || 0}</div>
          {
            data.today_cases.positif
            ?
            <div className="inline-flex items-center text-sm">
              (
              <Arrow />
              <span>{data.today_cases.positif}</span>
              )
            </div>
            :
            ''
          }
        </Card>
        <Card title="Pulih" color="bg-green-500">
          <div>{data.total_cases.sembuh || 0}</div>
          {
            data.today_cases.sembuh
            ?
            <div className="inline-flex items-center text-sm">
              (
              <Arrow />
              <span>{data.today_cases.sembuh}</span>
              )
            </div>
            :
            ''
          }
        </Card>
        <Card title="Wafat" color="bg-red-500">
          <div>{data.total_cases.meninggal || 0}</div>
          {
            data.today_cases.meninggal
            ?
            <div className="inline-flex items-center  text-sm">
              (
                <Arrow />
                <span>{data.today_cases.meninggal}</span>
               )
            </div>
            :
            ''
          }
        </Card>
      </div>
        :
        <div className="text-center mb-20">
          <div className="lds-hourglass"></div>
          <p>Memuat data...</p>
        </div>
      }
      <div className="text-sm text-center mb-20">
        <Link href="/sebaran">
          <a>[Data sebaran]</a>
        </Link>
      </div>
    </div>
  )
}
