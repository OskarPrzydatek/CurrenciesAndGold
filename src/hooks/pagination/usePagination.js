import React from "react";
import paginationReducer from "../../reducers/paginationReducer";

export default function usePagination(numOfPages) {
    const allPages = React.useRef(null);

    const paginationState = {
        allPages: allPages,
        page: 1,
        from: 0,
        to: 10
    }

    // Lazy state load
    const initPaginationState = state => state;

    // Actualization num of all pages taken from api
    React.useEffect(() => {
        allPages.current = numOfPages;
    })

    // Reducer for pagination mechanics
    const [state, dispatch] = React.useReducer(
        paginationReducer, paginationState, initPaginationState);

    return [state, dispatch];
}
