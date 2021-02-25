import React from "react";
import usePaginationBar from "../../../../../../hooks/pagination/usePaginationBar";

export default function CurrentPages({ pages, actualPage, dispatch}) {
    const currentPages = usePaginationBar(actualPage);

    return (
        <>
            {pages
                .slice(currentPages - 1, currentPages + 2)
                .map(page => (
                    <li key={page}
                        style={{color: actualPage === page ? `red` : `black`}}
                        onClick={() => dispatch({type: 'TO_PAGE', payload: page})}>
                        {page}
                    </li>
                ))}
            <li key={`dots`}>
                ...
            </li>
            <li key={pages.length}
                style={{color: actualPage === pages.length ? `red` : `black`}}
                onClick={() => dispatch({type: 'TO_PAGE', payload: pages.length})}>
                {pages.length}
            </li>
        </>
    );
}