import { useEffect, useReducer } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BookingPage } from '../../pages/BookingPage/BookingPage';
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage';
import { ConfirmedBookingPage } from '../../pages/ConfirmedBookingPage/ConfirmedBookingPage';
import { fetchAPI } from '../../utils/api';

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.payload);
        default:
            return state;
    }
};
export const initializeTimes = () => {
    return fetchAPI(new Date());
}

export const Main = () => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    return (
        <>
            <ScrollHandler />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={
                    <BookingPage
                        availableTimes={availableTimes}
                        dispatch={dispatch} />
                } />
                <Route path="/confirmed-booking" element={<ConfirmedBookingPage />} />
                <Route path="*" element={<ComingSoonPage />} />
            </Routes>
        </>
    );
}

const ScrollHandler = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return null;
}
