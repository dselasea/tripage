import React from 'react'
import { useState } from 'react'

const TripList = () => {
    const [trips, setTrips] = useState([])

    // console.log(trips)

    fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(json => setTrips(json))

  return (
    <div>
        <h2>TripList</h2>
    </div>
  )
}

export default TripList