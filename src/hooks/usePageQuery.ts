

import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    return {
        page,
        prevPage: (event: ChangeEvent<unknown>, value: number) => setQuery(prev => {
            prev.set('page', (value).toString())
            return prev
        }),
    }
}

export {
    usePageQuery
}