import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre} from "../interfaces";

const genreService = {
    getAll: (): IRes<{genres:IGenre[]}> => apiService.get(urls.genre.base)

}

export {
    genreService
}