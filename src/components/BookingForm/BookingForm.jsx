import { useState } from 'react';

const style = {
    display: 'grid',
    maxWidth: '200px',
    gap: '20px'
};

export const BookingForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [availableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [occasions] = useState(['Birthday', 'Anniversary']);

    return (
        <form style={style}>
            <label htmlFor="res-date">Choose date</label>
            <input
                id="res-date"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)} />

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

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}