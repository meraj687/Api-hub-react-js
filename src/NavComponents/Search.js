import React, { useState } from 'react'
import Sresult from './Sresult'
import '../NavComponents/search.css'

function Search() {
  const [input, output] = useState('')

  const inputEvent = (event) => {
    console.log(event.target.value)
    output(event.target.value)
  }
  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Search Anything'
        onChange={inputEvent}
        value={input}
        className='coin-input'
      />
      <Sresult name={input} />
    </div>
  )
}

export default Search
