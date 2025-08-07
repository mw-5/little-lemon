import { useEffect, useReducer } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BookingPage } from '../../pages/BookingPage/BookingPage';
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage';

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Logic to update available times based on the selected date
            // For simplicity, unchanged state is returned here
            return state;
        default:
            return state;
    }
};
const initializeTimes = () => [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

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
