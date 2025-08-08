import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../../utils/api';

test('initializeTimes returns correct times', () => {
    // Arrange
    const expectedTimes = fetchAPI(new Date());

    // Act
    const times = initializeTimes();

    // Assert
    expect(times).toEqual(expectedTimes);
});

test('updateTimes returns changed state', () => {
    // Arrange
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: new Date() };

    // Act
    const newState = updateTimes(initialState, action);

    // Assert
    expect(newState).not.toEqual(initialState);
});