import {IGenre} from "./genreInterface";

export interface IMovie {
    genres: IGenre[]
    poster_path: string
    id: number
    original_language: string
    original_title: string
    release_date: string
    overview: string
    title: string
    vote_average: number
    homepage: string
    runtime: number
    tagline: string
}