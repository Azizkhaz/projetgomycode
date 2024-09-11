import React, { useState } from 'react';
import { Addreservation } from '../../../api/reservationApi';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import './Reservation.css'

function Reservation () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const navigate = useNavigate()



  const addreservation = async (value) => {
    try{
    await Addreservation(value)
    alert('reservation succesfuly')
    navigate('/user')
   }catch(err){
    console.log(err)
   }
  };

  return (
    <div className="reservation-container">
    <h2>Make a Reservation</h2>
    <form className="reservation-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required="" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Number</label>
        <input type="num" name="number" required="" placeholder="Number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
  
        <input type="date"  name="date" required="" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input type="time"  name="time" required="" placeholder="Time"  value={time} onChange={(e)=>setTime(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input type="number"  name="guests" required="" placeholder="Guests"  value={guests} onChange={(e)=>setGuests(e.target.value)} />
      </div>
      <button onClick={()=>addreservation({name,number,date,time,guests})}>Reserve Now</button>
    </form>
  </div>
  );
}

export default Reservation;