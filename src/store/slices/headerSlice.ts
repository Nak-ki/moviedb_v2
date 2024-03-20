import {createSlice} from "@reduxjs/toolkit";

interface IState {
    switcher: boolean
    trigger: boolean
}

const initialState : IState = {
    switcher: false,
    trigger: false

}

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        setSwitcher: (state) => {
        state.switcher = !state.switcher
        },
        setTrigger: (state) => {
            state.trigger = !state.trigger
        }
    }
})

const {reducer: headerReducer, actions} =  headerSlice

const headerActions = {
    ...actions
}

export {
    headerActions,
    headerReducer
}