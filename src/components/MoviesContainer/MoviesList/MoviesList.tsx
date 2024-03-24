import {ChangeEvent, useEffect} from "react";
import {Pagination} from "@mui/material";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector, usePageQuery} from "../../../hooks";
import {movieActions} from "../../../store";
import {MoviesListCard} from "../MoviesListCard";
import css from './MovieList.module.css'

const MoviesList = () => {

    const{movies} = useAppSelector(state => state.movies)

    const dispatch = useAppDispatch()
    const {page, prevPage, pagesBorder}: {page:string, prevPage: (event: ChangeEvent<unknown>, value: number) => void, pagesBorder: number} = usePageQuery()
    const [searchParams] = useSearchParams()
    const {switcher} = useAppSelector(state => state.header)
    const id =  searchParams.get('id')
    const word = searchParams.get('word')

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getByGenre({page, with_genres: id}))
        }
        else if (word){
            dispatch(movieActions.getByWord({page, query: word}))
        }
        else {
        dispatch(movieActions.getAll({page}))
        }
    }, [page, dispatch,id, word]);
    console.log(movies)

    return (
        <div>
            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={switcher ? css.PaginationDark : css.PaginationLight}>
                <Pagination className={css.Pgination} count={pagesBorder} onChange={prevPage} page={+page}/>
            </div>
        </div>
    );
}


export {MoviesList};
