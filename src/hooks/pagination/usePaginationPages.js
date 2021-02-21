import React from "react";

export default function usePaginationPages(numOfPages) {
    const [pages, setPages] = React.useState(new Set());

    // Make set of pages to render (Set - no repeat num of page)
    React.useEffect(() => {
        for (let page = 1; page <= numOfPages; page++) {
            setPages(prev => new Set(prev.add(page)))
        }
    }, [numOfPages])

    // Return set as array
    return Array.from(pages);
}
