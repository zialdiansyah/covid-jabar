export default async (req, res) => {
  if(req.method !== 'GET') {
    return res.status(405).end(JSON.stringify({message: 'Sorry'}))
  }
  const kota = await getKota()

  res.status(200).end(JSON.stringify(kota))
}

async function getKota () {
  const response = await fetch(`https://covid19-public.digitalservice.id/api/v1/wilayah/jabar?level=kabupaten`)
  const { data } = await response.json()
  return data
}