// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { format } from 'date-fns'

export default async (req, res) => {
  if(req.method !== 'GET') {
    return res.status(405).end(JSON.stringify({message: 'Sorry'}))
  }
  const total_cases = await getTotalCases()
  const today_cases = await getTodayCases()
  const indo_cases = await getAllCases()

  res.status(200).end(JSON.stringify({total_cases, today_cases, indo_cases}))
}

async function getTodayCases () {
  const response = await fetch('https://covid19-public.digitalservice.id/api/v1/rekapitulasi_v2/jabar/harian?level=prov')
  const { data } = await response.json()
  // const today = format(new Date(), 'yyyy-MM-dd')
  // const today_data = await data.content.filter((el, index, arr) => el.tanggal === today)
  // let today_case = {}
  
  // if(today_data.length > 0) {
  //   today_case = {
  //     positif: today_data[0].positif,
  //     sembuh: today_data[0].sembuh,
  //     meninggal: today_data[0].meninggal
  //   }
  // }
  const [ cases ] = data.content.slice(-1)
  const today_cases = {
    positif: cases.CONFIRMATION,
    dirawat: cases.confirmation_diisolasi,
    sembuh: cases.confirmation_selesai,
    meninggal: cases.confirmation_meninggal
  }
  return today_cases
}

async function getTotalCases () {
  const response = await fetch('https://covid19-public.digitalservice.id/api/v1/rekapitulasi_v2/jabar/kumulatif?level=prov')
  const { data } = await response.json()
  const [cases] = data.content.slice(-1)
  const total_cases = {
    positif: cases.CONFIRMATION,
    dirawat: cases.confirmation_diisolasi,
    sembuh: cases.confirmation_selesai,
    meninggal: cases.confirmation_meninggal
  }
  return total_cases
}

async function getAllCases () {
  const response = await fetch('https://dekontaminasi.com/api/id/covid19/stats')
  const { numbers, regions } = await response.json()
  return { numbers, regions }
}