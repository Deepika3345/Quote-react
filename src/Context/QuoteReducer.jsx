const QuoteReducer = (state, action) => {

    switch (action.type) {

        case "GET_QUOTES":
            return {
                ...state,
                quoteData: action.payload,
            }
        default:
            return state
    }

}

export default QuoteReducer