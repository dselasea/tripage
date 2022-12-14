import React from 'react'
// Styles
import './TripList.css'
import { useState, useEffect } from 'react'

const TripList = () => {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(setTrips(json)))
    },[url])
    
    console.log(trips)

  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        <ul>
            {trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filters">
            <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                Europen Trips
            </button>
            <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
        </div>
    </div>
  )
}

export default TripList