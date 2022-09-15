import React from 'react'
import { useState, useEffect } from 'react'
import "./TripList.css"


const TripList = () => {
  const [trips, setTrips] = useState([])
  console.log(trips)

  useEffect(() => {
    fetch('http://localhost:3000/trips')
       .then(response => response.json())
       .then(json => setTrips(json))
  }, [])


  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        <ul>
          {trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TripList