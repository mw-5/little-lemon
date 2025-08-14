import { render, screen, fireEvent, act } from '@testing-library/react';
import { BookingForm } from './/BookingForm';


test('Renders the booking form', () => {
    // Arrange
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} />);
    const dateLabel = screen.getByText("Choose date");

    // Assert
    expect(dateLabel).toBeInTheDocument();
});

test('User can submit form', async () => {
    // Arrange
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: /submit reservation/i });

    // Act
    await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
        fireEvent.change(timeSelect, { target: { value: '18:00' } });
        fireEvent.change(guestsInput, { target: { value: '2' } });
        fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
        fireEvent.click(submitButton);
    });

    // Assert
    expect(submitButton).toBeInTheDocument();
    expect(mockSubmitForm).toHaveBeenCalled();
});

test('Shows validation errors when submitting empty form', async () => {
    // Arrange
    const mockSubmitForm = jest.fn();
    render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
    const submitButton = screen.getByRole('button', { name: /submit reservation/i });
    const inputGuests = screen.getByLabelText('Number of guests');

    // Act
    await act(async () => {
        fireEvent.change(inputGuests, { target: { value: '0' } });
        fireEvent.click(submitButton);
    });

    expect(await screen.findByText('Please choose a date.')).toBeInTheDocument();
    expect(await screen.findByText('At least 1 guest')).toBeInTheDocument();
    expect(mockSubmitForm).not.toHaveBeenCalled();
});

describe('Date input', () => {
    it('Shows validation error when date is empty', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const dateInput = screen.getByLabelText('Choose date');

        // Act
        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('Please choose a date.')).toBeInTheDocument();
    });

    it('Shows no validation error when date is valid', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const dateInput = screen.getByLabelText('Choose date');

        // Act
        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(screen.queryByText('Please choose a date.')).not.toBeInTheDocument
    });

    it('Calls Dispatch when date changes', async () => {
        // Arrange
        const mockDispatch = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={mockDispatch} submitForm={() => {}} />);
        const dateInput = screen.getByLabelText('Choose date');

        // Act
        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
        });

        // Assert
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: new Date('2023-12-25')
        });
    });
});

describe('Time input', () => {
    it('Shows validation error when time is not selected', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const timeSelect = screen.getByLabelText('Choose time');

        // Act
        await act(async () => {
            fireEvent.change(timeSelect, { target: { value: '' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('Please choose a time.')).toBeInTheDocument();
    });

    it('Shows no validation error when time is selected', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const timeSelect = screen.getByLabelText('Choose time');

        // Act
        await act(async () => {
            fireEvent.change(timeSelect, { target: { value: '17:00' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(screen.queryByText('Please choose a time.')).not.toBeInTheDocument();
    });

    it('Renders available times', () => {
        // Arrange
        render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} dispatch={() => {}} />);
        const timeSelect = screen.getByLabelText('Choose time');

        // Assert
        expect(timeSelect).toHaveTextContent('17:00');
        expect(timeSelect).toHaveTextContent('18:00');
        expect(timeSelect).toHaveTextContent('19:00');
    });
});

describe('Guests input', () => {
    it('Enforces min and max values', () => {
        // Arrange
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />);
        const guestsInput = screen.getByLabelText('Number of guests');

        // Assert
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    it("Shows validation error when guests exceed maximum", async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const guestsInput = screen.getByLabelText('Number of guests');

        // Act
        await act(async () => {
            fireEvent.change(guestsInput, { target: { value: '11' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('Maximum 10 guests')).toBeInTheDocument();
    });

    it('Shows validation error when guests is less than minimum', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const guestsInput = screen.getByLabelText('Number of guests');

        // Act
        await act(async () => {
            fireEvent.change(guestsInput, { target: { value: '0' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('At least 1 guest')).toBeInTheDocument();
    });

    it('Shows no validation error when guests is within range', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const guestsInput = screen.getByLabelText('Number of guests');

        // Act
        await act(async () => {
            fireEvent.change(guestsInput, { target: { value: '5' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(screen.queryByText('At least 1 guest')).not.toBeInTheDocument();
        expect(screen.queryByText('Maximum 10 guests')).not.toBeInTheDocument();
    });
});

describe('Occasion select', () => {
    it('Shows validation error when occasion is not selected', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const occasionSelect = screen.getByLabelText('Occasion');

        // Act
        await act(async () => {
            fireEvent.change(occasionSelect, { target: { value: '' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('Please choose an occasion.')).toBeInTheDocument();
    });

    it('Shows no validation error when occasion is selected', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const occasionSelect = screen.getByLabelText('Occasion');

        // Act
        await act(async () => {
            fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(screen.queryByText('Please choose an occasion.')).not.toBeInTheDocument();
    });

    it('Shows validation error when invalid occasion is selected', async () => {
        // Arrange
        const mockSubmitForm = jest.fn();
        render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={mockSubmitForm} />);
        const submitButton = screen.getByRole('button', { name: /submit reservation/i });
        const occasionSelect = screen.getByLabelText('Occasion');

        // Act
        await act(async () => {
            fireEvent.change(occasionSelect, { target: { value: 'Invalid Occasion' } });
            fireEvent.click(submitButton);
        });

        // Assert
        expect(await screen.findByText('Please choose an occasion.')).toBeInTheDocument();
    });

    it('Renders all occasions', () => {
        // Arrange
        render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />);
        const occasionSelect = screen.getByLabelText('Occasion');

        // Assert
        expect(occasionSelect).toHaveTextContent('Birthday');
        expect(occasionSelect).toHaveTextContent('Anniversary');
    });
});