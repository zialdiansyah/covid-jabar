export default async (req, res) => {
  if(req.method !== 'GET') {
    return res.status(405).end(JSON.stringify({message: 'Sorry'}))
  }
  const sebaran = await getSebaran(req.query.code)

  res.status(200).end(JSON.stringify(sebaran))
}

async function getSebaran (code = 3217) {
  const today = getToday()
  const response = await fetch(`https://covid19-public.digitalservice.id/api/v1/sebaran_app_v2/jabar?kode_kab=${code}&tanggal_konfirmasi=${today}`)
  const { data } = await response.json()
  const content = data.content
  return content
}

function getToday () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy+ '-' + mm + '-' + dd;
  return today
}