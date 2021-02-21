export default function paginationReducer(state, action) {
    switch (action.type) {
        case 'NEXT' :
            if (state.page >= state.allPages.current) {
                return {
                    ...state,
                    page: state.allPages.current,
                    from: (state.allPages.current - 1) * 10,
                    to: state.allPages.current * 10
                }
            }
            return {
                ...state,
                page: state.page + 1,
                from: state.from + 10,
                to: state.to + 10
            }
        case 'PREV':
            if (state.page <= 1) {
                return {
                    ...state,
                    page: 1,
                    from: 0,
                    to: 10
                }
            }
            return {
                ...state,
                page: state.page - 1,
                from: state.from - 10,
                to: state.to - 10
            }
        case 'TO_PAGE':
            return {
                ...state,
                page: action.payload,
                from: (action.payload - 1) * 10,
                to: action.payload * 10
            }
        default:
            throw new Error();
    }
}
