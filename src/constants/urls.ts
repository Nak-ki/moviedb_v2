const baseURL = 'https://api.themoviedb.org/3';

const movieList = '/movie'
const genre = '/genre'
const search = '/search'

const urls = {
    movieList: {
        base: `/discover${movieList}`,
        byId:(id:number):string => `${movieList}/${id}`,
        searchByWord: `${search}/${movieList}`
    },
    genre: {
        base: `${genre}${movieList}/list`
    }
}

export {
    baseURL,
    urls
}

