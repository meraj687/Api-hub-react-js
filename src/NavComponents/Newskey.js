import React from 'react'
import '../NavComponents/New.css'

const Newskey = ({ title, description, url, urlToImage }) => {
  return (
    <div class='imagebox'>
      <img src={urlToImage} width='auto' height='auto' className='images' />

      <p style={{ color: 'white', width: '50%', float: 'right' }}>
        <a href={url}>{title}</a>
      </p>
      <p style={{ color: 'white', width: '50%', float: 'right' }}>
        {description}
      </p>
    </div>
  )
}

export default Newskey
