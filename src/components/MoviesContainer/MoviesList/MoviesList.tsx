import {useAppDispatch, useAppSelector, usePageQuery} from "../../../hooks";
import {useEffect} from "react";
import {movieActions} from "../../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Pagination} from "@mui/material";

const MoviesList = () => {

    const{movies, total_pages} = useAppSelector(state => state.movies)

    const dispatch = useAppDispatch()
    const {page, prevPage} = usePageQuery()

    useEffect(() => {
        dispatch(movieActions.getAll({page}))
    }, [page]);
    console.log(movies)

    return (
        <div>
            <div>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <Pagination count={total_pages} onChange={prevPage} page={+page}/>
            </div>
        </div>
    );
}


export {MoviesList};
