import React from "react";

/**
 * Hook to render pages in group of three
 * And change the group after go forward/back by pages
 **/
export default function usePaginationBar(actualPage) {
    const [currentPages, setCurPages] = React.useState(actualPage);

    React.useEffect(() => {
        // Go forward pages
        if (actualPage >= currentPages + 3 || actualPage === 1) {
            setCurPages(actualPage)
        // Go back by pages
        } else if (currentPages >= 1 && currentPages > actualPage) {
            setCurPages(actualPage - 2)
        }

    }, [actualPage, currentPages])

    return currentPages;
}
