import {FC} from 'react';


interface IProps {
    poster_path:string

}

const PosterPreview :FC<IProps> = ({poster_path}) => {
    return (
        <div>
            <img src={`https://Image.tmdb.org/t/p/w500${poster_path}`} alt='poster'/>
        </div>
    );
};

export {PosterPreview};
