import { format } from 'date-fns'

export default async (req, res) => {
  if(req.method !== 'GET') {
    return res.status(405).end(JSON.stringify({message: 'Sorry'}))
  }
  let date = new Date(req.query.date)
  const isoDate = date.toISOString()
  date = isoDate.substr(0, 10)
  const sebaran = await getSebaran(req.query.code, date)

  res.status(200).end(JSON.stringify(sebaran))
}

async function getSebaran (code = 3217, date) {
  if(date === null) {
    date = format(new Date(), 'yyyy-MM-dd')
  }
  const response = await fetch(`https://covid19-public.digitalservice.id/api/v1/sebaran_app_v2/jabar?kode_kab=${code}&tanggal_update=${date}`)
  const { data } = await response.json()
  const content = data.content
  return content
}