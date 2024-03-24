import {FC} from 'react';
import {Rating, Stack} from "@mui/material";

import {IMovie} from "../../../interfaces";
import css from './MovieInfo.module.css'
import {PosterPreview} from "../PosterPreview";
import {BadgeGenre} from "../../GenresContainer";

interface IProps {
    film: IMovie

}

const MovieInfo :FC<IProps> = ({film}) => {
    const {poster_path,title,original_title,release_date, original_language, overview,genres, vote_average,  homepage, runtime, tagline} = film

    console.log(film)
 return (
  <div>
      <div className={css.Main}>
          <div className={css.Poster}>
              <PosterPreview poster_path={poster_path}/>
          </div>
          <div className={css.Info}>
              <h1>{title}</h1>
              <h3><b>Original title:</b> {original_title}</h3>
              <p><b>Tagline:</b><i> {tagline}</i></p>
              <div className={css.Badgee}>
                  <Stack direction={'row'} spacing={10} >
                      {genres.map(genre => <BadgeGenre  genre={genre} key={genre.id}/>)}
                  </Stack>
              </div>
              <p><b>Release date: </b> {release_date}</p>
              <p><b>Original language: </b> {original_language}</p>
              <p><b>Runtime: </b> {runtime}</p>
              <Rating className={css.Rate} max={10} defaultValue={vote_average} color={'#ffd700'} size={'large'}/>
              <p><b>Homepage: </b> {homepage}</p>
              <article><b>Overview: </b> {overview}</article>
          </div>
      </div>
  </div>
 );
};

export {MovieInfo};
