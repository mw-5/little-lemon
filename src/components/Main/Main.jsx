import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BookingPage } from '../../pages/BookingPage/BookingPage';
import { ComingSoonPage } from '../../pages/ComingSoonPage/ComingSoonPage';

export const Main = () => {
    return (
        <>
            <ScrollHandler />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
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
