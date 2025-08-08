import { useState } from 'react';
import './BookingForm.css';

export const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [occasions] = useState(['Birthday', 'Anniversary']);

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatch({
            type: 'UPDATE_TIMES',
            payload: new Date(e.target.value)
        });
    }

    return (
        <form onSubmit={handleSubmit} className='booking-form' aria-label='Table reservation form'>
            <label htmlFor="res-date">Choose date</label>
            <input
                id="res-date"
                type="date"
                value={date}
                onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={e => setTime(e.target.value)}>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                id="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={e => setGuests(e.target.value)} />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}>
                {occasions.map(occasion => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                ))}
            </select>

            <input type="submit" value="Make Your reservation" aria-label='Submit reservation' />
        </form>
    );
}