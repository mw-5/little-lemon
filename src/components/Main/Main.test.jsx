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

test('updateTimes returns unchanged state', () => {
    // Arrange
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2023-10-01' };

    // Act
    const newState = updateTimes(initialState, action);

    // Assert
    expect(newState).toEqual(initialState);
});