import React from "react";

export default function LastPages({ pages, actualPage, dispatch}) {
    return (
        <>
            {pages
                .slice(pages.length - 4, pages.length)
                .map(page => (
                    <li key={page}
                        style={{color: actualPage === page ? `#BF6989` : `#014029`}}
                        onClick={() => dispatch({type: 'TO_PAGE', payload: page})}>
                        {page}
                    </li>
                ))
            }
        </>
    );
}
