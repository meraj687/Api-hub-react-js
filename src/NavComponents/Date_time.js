import React, { useState, useEffect } from 'react'
import { FaCalendar, FaClock, FaTimes, FaTimesCircle } from 'react-icons/fa'

function Date_time() {
  let time = new Date().toLocaleTimeString()
  let date = new Date().toLocaleDateString()
  const [ctime, setCTime] = useState(time)
  const [dtime, setDTime] = useState(date)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString()
    setCTime(time)
  }

  // setCTime(UpdateTime, 1000)
  setInterval(UpdateTime, 1000)

  return (
    <div className='main_div'>
      <div className='center_div'>
        <h1>Date Time</h1>
        <br />
        <h2>
          {' '}
          <FaClock /> {ctime}
        </h2>
        <h2>
          {' '}
          <FaCalendar /> {dtime}
        </h2>
      </div>
    </div>
  )
}

export default Date_time
