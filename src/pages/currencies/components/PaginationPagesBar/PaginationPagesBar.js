import React from "react";
import usePaginationPages from "../../../../hooks/pagination/usePaginationPages";

export default function PaginationPagesBar({ dispatch, numOfPages }) {
    const pages = usePaginationPages(numOfPages);

    return (
        <ul>
            <li key={`prev`}
                onClick={() => dispatch({type: 'PREV'})}>prev
            </li>
            {pages.map(page => (
                <li key={page}
                    onClick={() => dispatch({type: 'TO_PAGE', payload: page})}>{page}</li>
            ))}
            <li key={`next`}
                onClick={() => dispatch({type: 'NEXT'})}>next
            </li>
        </ul>
    );
}
