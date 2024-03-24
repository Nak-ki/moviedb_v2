import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";

import {useAppSelector} from "./useAppSelector";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const {total_pages} = useAppSelector(state => state.movies)

    const page = query.get('page');
    const pagesBorder = total_pages >= 500 ? 500 : total_pages
    const currentPage = !page ? '1' : page

    return {
        page: currentPage,
        prevPage: (event: ChangeEvent<unknown>, value: number) => {
            setQuery(prev => {
                prev.set('page', (value).toString())
                return prev
            })
        },
        pagesBorder
    }
}

export {
    usePageQuery
}