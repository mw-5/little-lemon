import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns correct times', () => {
    // Arrange
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

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