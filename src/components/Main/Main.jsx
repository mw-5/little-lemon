import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BookingPage } from '../../pages/BookingPage/BookingPage';

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
    );
}