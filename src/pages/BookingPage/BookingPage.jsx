import { BookingForm } from "../../components/BookingForm/BookingForm";

export const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <main>
            <h1>Reserve a table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} />
        </main>
    );
}