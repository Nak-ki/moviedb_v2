import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IPagination} from "../interfaces";
import {IMovie} from "../interfaces";



const movieService = {
    getAll:(page:string = '1'): IRes<IPagination> => apiService.get(urls.movieList.base, {params:{page}}),
    getById: (id:number): IRes<IMovie> => apiService.get(urls.movieList.byId(id)),
    getByWord: (query:string, page: string): IRes<IPagination> => apiService.get(urls.movieList.searchByWord, {params:{query, page}}),
    getByGenre: (page:string, with_genres: string): IRes<IPagination> => apiService.get(urls.movieList.base, {params:{page, with_genres}})
}

export {
    movieService
}