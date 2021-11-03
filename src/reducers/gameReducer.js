const defaultState = [
    ['', ''],
    ['', '']
];

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === 'B') {
            state[action.x][action.y] = 'W';
        } else {
            state[action.x][action.y] = 'B';
        }
        return [...state];
    }
    return state;
}