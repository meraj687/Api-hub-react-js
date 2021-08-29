import React from 'react'

function Sresult(props) {
  const image = `https://source.unsplash.com/600x300/?${props.name}`
  return (
    <div>
      <img src={image} alt='pic' style={{ width: '100%', height: 'auto' }} />
    </div>
  )
}

export default Sresult
