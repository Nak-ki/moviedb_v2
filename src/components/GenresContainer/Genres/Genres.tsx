import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";

import {genreActions} from "../../../store";
import {Genre} from "../Genre";
import css from './Genres.module.css'


const Genres = () => {

    const dispatch = useAppDispatch()
    const {genresList} = useAppSelector(state => state.genres)

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);
    return (
        <div className={css.Genres}>
            {genresList.genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};
