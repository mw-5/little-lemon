import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './/BookingForm';

test('Renders the booking form', () => {
    // Arrange
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);

    // Act
    const dateLabel = screen.getByText("Choose date");

    // Assert
    expect(dateLabel).toBeInTheDocument();
});

test('User can submit form', () => {
    // Arrange
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const form = screen.getByRole('form', { name: /table reservation form/i });
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    // Act
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    fireEvent.click(submitButton);

    // Assert
    expect(mockSubmitForm).toHaveBeenCalled();
});