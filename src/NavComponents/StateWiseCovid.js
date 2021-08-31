import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../NavComponents/StateWiseCovid.css'
import { Table } from 'react-bootstrap'

function StateWiseCovid() {
  const [input, output] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getData() {
      const resp = await axios.get('https://api.covid19api.com/summary')
      console.log(resp.data.Countries)
      output(resp.data.Countries)
    }

    getData()
  })

  const filteredCoins = input.filter((coin) =>
    coin.Country.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <div className='coin-search'>
        <br />
        <form action=''>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          />
        </form>
      </div>
      {filteredCoins.map(
        ({
          Country,
          CountryCode,
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered,
          Date,
          Slug,
        }) => {
          return (
            <>
              <Table striped bordered hover variant='dark' responsive>
                <thead>
                  <tr className='neon'>
                    <th>Country</th>
                    <th>Slug</th>
                    <th>CountryCode</th>
                    <th>NewConfirmed</th>
                    <th>TotalConfirmed</th>
                    <th>NewDeaths</th>
                    <th>TotalDeaths</th>
                    <th>NewRecovered</th>
                    <th>TotalRecovered</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{Country}</td>
                    <td>{Slug}</td>
                    <td>{CountryCode}</td>
                    <td>{NewConfirmed}</td>
                    <td>{TotalConfirmed}</td>
                    <td>{NewDeaths}</td>
                    <td>{TotalDeaths}</td>
                    <td>{NewRecovered}</td>
                    <td>{TotalRecovered}</td>
                    <td>{Date}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          )
        }
      )}
    </div>
  )
}

export default StateWiseCovid
