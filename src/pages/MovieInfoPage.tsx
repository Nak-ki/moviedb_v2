import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";
import {movieActions} from "../store";
import {MovieInfo} from "../components";

const MovieInfoPage = () => {
   const {id} = useParams()
    const dispatch = useAppDispatch()
    const {film} = useAppSelector(state => state.movies)

    useEffect(() => {

        dispatch(movieActions.getById({id:+id}))

    }, [id, dispatch]);

    return (
        <div>
            {film && <MovieInfo film={film}/>}
        </div>
    );
};

export {MovieInfoPage};
