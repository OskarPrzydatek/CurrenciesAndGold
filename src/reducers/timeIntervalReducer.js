export default function timeIntervalReducer(state, action) {
    switch (action.type) {
        case 'FROM':
            return {
                ...state,
                from: action.payload
            }
        case 'TO':
            return {
                ...state,
                to: action.payload
            }
        default:
            throw new Error();
    }
}
