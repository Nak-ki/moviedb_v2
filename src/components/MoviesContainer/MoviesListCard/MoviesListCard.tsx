import {FC} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps {
    movie: IMovie
}


const MoviesListCard :FC<IProps> = ({movie}) => {
    console.log(movie)

 return (
  <div>
   MoviesListCard
  </div>
 );
};

export {MoviesListCard};