import React from 'react'
import { useReducer,useContext } from 'react';
import { initialState,reducer } from './utils/reducer';
import {
  FormContext
}from '../components/utils/Context'
export default function BookingForm() {
  const { state , handleInputChange } = useContext(FormContext)

  return (

    <><h1>Book Now</h1><form style={{ "display": "grid", "maxWidth": "200px", "gap": "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={state.date} name="CHOOSE_DATE" onChange={handleInputChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time " value={state.time} name="CHOOSE_TIME" onChange={handleInputChange}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="CHOOSE_NUMBER_OF_GUESTS" value={state.guests} onChange={handleInputChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="CHOOSE_OCCASION" value={state.occasion} onChange={handleInputChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form></>
  )
}
