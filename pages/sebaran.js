import React, { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function Sebaran() {
  const { data, error } = useSwr('/api/daftar_kota', fetcher)
  const getCity = async (e) => {
    const response = await fetch('/api/sebaran?code=' + e.target.value)
    const data = await response.json()
    setCases(data)
    console.log(cases)
  }
  const [cases, setCases] = useState([]);


  if (error) return <div>Failed to load data</div>

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold text-center my-4">Sebaran</h1>
      <p className="text-m text-center mb-1">Pilih Kota/Kabupaten</p>
      <div className="md:w-1/2 mx-auto px-4 mb-5">
        {
          !data ? <div>Loading...</div>
          :
          <select
            className="block appearance-none w-full py-3 px-4 pr-8 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={getCity}
          >
            {data.map(city => <option key={city.kode_bps} value={city.kode_bps}>{city.nama_wilayah}</option> )}
          </select>
        }
        <p className="py-2">hari ini:</p>
        <p className="py-2">jumlah: {cases.length || 0}</p>
        {
          cases.length !== 0 ?
          cases.map(item => {
            return (
              <div key={item.id}>
                <p className="flex space-x-5"><span>Kecamatan:</span> <span>{item.nama_kec}</span></p>
                <p className="flex space-x-5"><span>Kelurahan:</span> <span>{item.nama_kel}</span></p>
                <p className="flex space-x-5"><span>Status:</span> <span>{item.status}</span></p>
                <p className="flex space-x-5"><span>Stage:</span> <span>{item.stage}</span></p>
                <p className="flex space-x-5"><span>Umur:</span> <span>{item.umur}</span></p>
                <hr />
              </div>
            )
          })
          :
          <div>---</div>
        }
      </div>
      <div className="text-sm text-center mb-20">
        <Link href="/">
          <a>[Back]</a>
        </Link>
      </div>
      <div className="text-sm text-center">Data from <a href="https://covid19-public.digitalservice.id/api/v1/">Pikobar Jabar</a></div>
    </div>
  )
}