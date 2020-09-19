import React, { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSwr from 'swr'
import DatePicker from 'react-datepicker'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function Sebaran() {
  const { data, error } = useSwr('/api/daftar_kota', fetcher)
  const getCases = async () => {
    setLoading(true)
    const response = await fetch('/api/sebaran?code=' + city + '&date=' + startDate)
    const data = await response.json()
    setLoading(false)
    setCases(data)
  }
  const [cases, setCases] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [city, setCity] = useState(3217);
  const [loading, setLoading] = useState(false);

  if (error) return <div>Failed to load data</div>

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold text-center my-4">Sebaran</h1>
      <p className="text-m text-center mb-1">Pilih Kota/Kabupaten</p>
      <div className="flex flex-col md:w-1/2 mx-auto px-4 mb-5">
        {
          !data ? <div className="text-center mb-2">Memuat data...</div>
          :
          <select
            className="block appearance-none w-full py-3 px-4 pr-8 border border-gray-500 text-gray-900 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            onChange={(e) => setCity(e.target.value)}
          >
            {data.map(city => <option key={city.kode_bps} value={city.kode_bps}>{city.nama_wilayah}</option> )}
          </select>
        }
        <DatePicker
          className="my-2 block appearance-none w-full py-3 px-4 pr-8 border border-gray-500 text-gray-900 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <button onClick={getCases} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cari</button>
        <p className="py-2 text-center">Jumlah data: {cases.length || 0}</p>
        {
          loading
          ?
          <div className="text-center">
            <div className="lds-hourglass"></div>
          </div>
          :
          ''
        }
        {
          cases.length !== 0
          ?
          cases.map(item => {
            return (
              <div key={item.id}>
                <p className="flex justify-between"><span>Kecamatan:</span> <span>{item.nama_kec}</span></p>
                <p className="flex justify-between"><span>Kelurahan:</span> <span>{item.nama_kel}</span></p>
                <p className="flex justify-between"><span>Status:</span> <span>{item.status}</span></p>
                <p className="flex justify-between"><span>Stage:</span> <span>{item.stage}</span></p>
                <p className="flex justify-between"><span>Umur:</span> <span>{item.umur}</span></p>
                <hr />
              </div>
            )
          })
          :
          <div className="text-center">---</div>
        }
      </div>
      <div className="text-sm text-center mb-20">
        <Link href="/">
          <a>[Back]</a>
        </Link>
      </div>
    </div>
  )
}