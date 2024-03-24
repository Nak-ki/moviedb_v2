import {FC} from 'react';
import {Badge, Rating} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {PosterPreview} from "../PosterPreview";
import css from './MovieListCard.module.css'


interface IProps {
    movie: IMovie
}


const MoviesListCard :FC<IProps> = ({movie}) => {

    const {id,title, poster_path, vote_average , release_date} = movie

    const navigate = useNavigate()



 return (
  <div className={css.MovieCard} onClick={() => {navigate(`/overview/${id}`)}}>
    <div className={css.Poster}>
        <Badge badgeContent={vote_average} color={"secondary"}>
           <PosterPreview poster_path={poster_path}/>
       </Badge>
    </div>
      <div className={css.Badge}>
          <Rating max={10} defaultValue={vote_average} color={'#ffd700'} size={'large'} readOnly/>
          <h1>{title}</h1>
          <h3>{release_date}</h3>
      </div>

  </div>
 );
};

export {MoviesListCard};