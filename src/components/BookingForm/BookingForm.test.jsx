import { render, screen } from '@testing-library/react';
import { BookingForm } from './/BookingForm';

test('Renders the booking form', () => {
  // Arrange
  render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);

  // Act
  const dateLabel = screen.getByText("Choose date");

  // Assert
  expect(dateLabel).toBeInTheDocument();
});