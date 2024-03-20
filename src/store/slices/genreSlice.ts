import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";


interface IState {
    genresList: IGenre[]
}

const initialState: IState = {
    genresList: null
}

const getAll = createAsyncThunk<{ genres: IGenre[] }, void>(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll()
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return thunkAPI.rejectWithValue(err.response.data)
        }

    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,  (state, action) => {
                state.genresList = action.payload.genres
                }
            )
    })

const {reducer: genreReducer, actions} = genreSlice

const genreActions= {
    ...actions,
        getAll
}

export {
    genreReducer,
    genreActions
}