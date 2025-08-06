import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BookingPage } from '../../pages/BookingPage/BookingPage';

export const Main = () => {
    return (
        <>
            <ScrollHandler />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
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
