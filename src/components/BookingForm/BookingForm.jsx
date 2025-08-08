import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './BookingForm.css';

const occasionsList = ['Birthday', 'Anniversary'];

const BookingSchema = Yup.object().shape({
    date: Yup.string().required('Please choose a date.'),
    time: Yup.string().required('Please choose a time.'),
    guests: Yup.number()
        .min(1, 'At least 1 guest')
        .max(10, 'Maximum 10 guests')
        .required('Please enter number of guests'),
    occasion: Yup.string().required('Please choose an occasion.')
});

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const initialValues = {
        date: '',
        time: '17:00',
        guests: 1,
        occasion: occasionsList[0]
    };

    const handleDateChange = (setFieldValue, value) => {
        setFieldValue('date', value);
        dispatch({
            type: 'UPDATE_TIMES',
            payload: new Date(value)
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={BookingSchema}
            onSubmit={(values, { setSubmitting }) => {
                submitForm({
                    ...values,
                    guests: parseInt(values.guests, 10)
                });
                setSubmitting(false);
            }}
        >
            {({ setFieldValue, values, isSubmitting }) => (
                <Form className='booking-form' aria-label='Table reservation form' noValidate>
                    <fieldset>
                        <label htmlFor="res-date">Choose date</label>
                        <Field
                            id="res-date"
                            name="date"
                            type="date"
                            required
                            value={values.date}
                            onChange={e => handleDateChange(setFieldValue, e.target.value)}
                        />
                        <ErrorMessage name="date" component="span" className="error" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="res-time">Choose time</label>
                        <Field
                            as="select"
                            id="res-time"
                            name="time"
                            required
                        >
                            {availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="time" component="span" className="error" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guests">Number of guests</label>
                        <Field
                            id="guests"
                            name="guests"
                            type="number"
                            min="1"
                            max="10"
                            required
                        />
                        <ErrorMessage name="guests" component="span" className="error" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="occasion">Occasion</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            required
                        >
                            {occasionsList.map(occasion => (
                                <option key={occasion} value={occasion}>{occasion}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="occasion" component="span" className="error" />
                    </fieldset>
                    <button type="submit" disabled={isSubmitting} aria-label='Submit reservation'>Make&nbsp;your&nbsp;reservation</button>
                </Form>
            )}
        </Formik>
    );
}