import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    page: number
    movies: IMovie[]
    total_pages: number
    film: IMovie
}

const initialState: IState = {
    film: null,
    movies: [],
    page: null,
    total_pages: null
}

const getAll = createAsyncThunk<IPagination, {page:string}> (
    'movieSlice/getAll',
    async  ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return thunkAPI.rejectWithValue(err.response.data)
        }

    }
)

const getById = createAsyncThunk<IMovie, {id:number}> (
    'movieSlice/getById',
    async ({id}, thunkApi) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return thunkApi.rejectWithValue(err.response.data)
        }
    }
)

const getByWord = createAsyncThunk <IPagination, {query: string, page: string}> (
    'movieSlice/getByWord',
    async ({query, page}, thunkApi) => {
        try {
            const {data} = await movieService.getByWord(query, page)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return thunkApi.rejectWithValue(err.response.data)
        }
    }
)
const getByGenre = createAsyncThunk <IPagination, {page: string, with_genres: string}> (
    'movieSlice/getByGenre',
    async ({page, with_genres}, thunkApi) => {
        try {
            const {data} = await movieService.getByGenre(page, with_genres)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return thunkApi.rejectWithValue(err.response.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {total_pages, page, results} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.film = action.payload
            })
            .addCase(getByWord.fulfilled, (state, action) => {
                const {total_pages, page, results} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
                }
            )
            .addCase(getByGenre.fulfilled,  (state, action) => {
                const {total_pages, page, results} = action.payload
                state.movies = results
                state.page = page
                state.total_pages = total_pages
            })
})

const {reducer: movieReducer,actions} = movieSlice

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByWord,
    getByGenre
}

export {
    movieReducer,
    movieActions
}