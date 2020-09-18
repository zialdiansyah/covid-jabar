// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if(req.method !== 'GET') {
    return res.status(405).end(JSON.stringify({message: 'Sorry'}))
  }
  const total_cases = await getTotalCases()
  const today_cases = await getTodayCases()

  res.status(200).end(JSON.stringify({total_cases, today_cases}))
}

function getToday () {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy+ '-' + mm + '-' + dd;
  return today
}

async function getTodayCases () {
  const response = await fetch('https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar/harian')
  const { data } = await response.json()
  const today = getToday()
  let today_case = {}
  
  const today_data = await data.content.filter((el, index, arr) => el.tanggal === today)
  if(today_data.length > 0) {
    today_case = {
      positif: today_data[0].positif,
      sembuh: today_data[0].sembuh,
      meninggal: today_data[0].meninggal
    }
  }
  return today_case
}

async function getTotalCases () {
  const response = await fetch('https://covid19-public.digitalservice.id/api/v1/rekapitulasi/jabar')
  const { data } = await response.json()
  const total_cases = {
    positif: data.content.positif,
    sembuh: data.content.sembuh,
    meninggal: data.content.meninggal
  }
  return total_cases
}
