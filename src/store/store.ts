import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, headerReducer} from "./slices";



const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        header: headerReducer
    }
})

export {
    store
}