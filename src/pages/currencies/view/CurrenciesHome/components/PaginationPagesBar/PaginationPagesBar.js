import React from "react";
import "./PaginationPagesBar.scss";
import usePaginationPages from "../../../../../../hooks/pagination/usePaginationPages";
import CurrentPages from "../CurrentPages/CurrentPages";
import LastPages from "../LastPages/LastPages";

export default function PaginationPagesBar({dispatch, numOfPages, actualPage}) {
    const pages = usePaginationPages(numOfPages);

    return (
        <ul className="page-bar">
            <li key={`prev`}
                className="page-bar__move-key"
                onClick={() => dispatch({type: 'PREV'})}>&lt;
            </li>
            {actualPage < pages.length - 3
                ? <CurrentPages
                    pages={pages}
                    actualPage={actualPage}
                    dispatch={dispatch}/>
                : <LastPages
                    pages={pages}
                    actualPage={actualPage}
                    dispatch={dispatch}/>}
            <li key={`next`}
                className="page-bar__move-key"
                onClick={() => dispatch({type: 'NEXT'})}>&gt;
            </li>
        </ul>
    );
}
