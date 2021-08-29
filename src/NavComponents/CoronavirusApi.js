import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountUp from 'react-countup'
import '../NavComponents/Covid.css'

function CoronavirusApi() {
  const [input, output] = useState()

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://api.covid19api.com/summary')
      console.log(res.data.Global)
      output(res.data.Global)
    }
    getData()
  })
  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>CORONAVIRUS API</h1>
        <br />
        {!input ? (
          <p>Something went wrong</p>
        ) : (
          <>
            <h2>
              <strong>NewConfirmed</strong> : {input.NewConfirmed}
            </h2>
            <h2>
              <strong>TotalConfirmed</strong> : {input.TotalConfirmed}
            </h2>
            <h2>
              <strong>NewDeaths</strong> : {input.NewDeaths}
            </h2>
            <h2>
              <strong>TotalDeaths</strong> : {input.TotalDeaths}
            </h2>
            <h2>
              <strong>NewRecovered</strong> : {input.NewRecovered}
            </h2>
            <h2>
              <strong>TotalRecovered</strong> : {input.TotalRecovered}
            </h2>
          </>
        )}
      </div>
    </div>
  )
}

export default CoronavirusApi
