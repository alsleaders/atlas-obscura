import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function POIList() {
  const [elephant, setElephant] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/japan?city=tokyo&limit=5'
      )
      .then(resp => {
        console.log(resp.json)
      })
  })

  return (
    <div>
      <p> this is going to be a map of the data</p>
    </div>
  )
}
