import React from "react";

export default function usePaginationBar(actualPage) {
    const [currentPages, setCurPages] = React.useState(actualPage);

    React.useEffect(() => {
        if (actualPage >= currentPages + 3 || actualPage === 1) {
            setCurPages(actualPage)
        } else if (currentPages >= 1 && currentPages > actualPage) {
            setCurPages(actualPage - 2)
        }

    }, [actualPage, currentPages])

    return currentPages;
}
