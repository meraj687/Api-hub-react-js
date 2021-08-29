import React from 'react'
import '../NavComponents/Crypt.css'

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol' style={{ color: 'red' }}>
            {symbol}
          </p>
        </div>
        <div className='coin-data'>
          <p className='coin-price' style={{ color: 'red' }}>
            ${price}
          </p>
          <p className='coin-volume' style={{ color: 'red' }}>
            ${volume.toLocaleString()}
          </p>

          {priceChange < 0 ? (
            <p className='coin-percent red' style={{ color: 'red' }}>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className='coin-percent green' style={{ color: 'red' }}>
              {priceChange.toFixed(2)}%
            </p>
          )}

          <p className='coin-marketcap' style={{ color: 'red' }}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
