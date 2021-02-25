export default function calculatorReducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENCY_1':
            return {
                ...state,
                currencyToConvert: action.payload
            }
        case 'SET_CURRENCY_2':
            return {
                ...state,
                resultCurrency: action.payload
            }
        case 'INPUT_STATE':
            return {
                ...state,
                input: action.payload
            }
        default:
            throw new Error();
    }
}
