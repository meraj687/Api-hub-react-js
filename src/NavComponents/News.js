import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Newskey from '../NavComponents/Newskey'

function News() {
  const [input, output] = useState([])

  useEffect(() => {
    async function getData() {
      const api = 'b83b4638a7ab4deabe49128ec3acca23'
      // const res = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${api}`
      // )
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b83b4638a7ab4deabe49128ec3acca23'
      )
      // console.log(res.data.articles)
      output(res.data.articles)
    }
    getData()
  }, [input])

  return (
    <div>
      {input.map(({ title, description, url, urlToImage }) => (
        <Newskey
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </div>
  )
}

export default News
