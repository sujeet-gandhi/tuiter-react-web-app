import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true
            state.tuits = []
        },
        [findTuitsThunk.fulfilled]: 
            (state, {payload}) => {
                state.loading = false
                state.tuits = payload
                // state.tuits = payload.reverse()
        },
        [findTuitsThunk.rejected]: 
                (state) => {
                state.loading = false
        },
        [deleteTuitThunk.fulfilled]: 
            (state, {payload}) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload)
        },
        [createTuitThunk.fulfilled]: 
            (state, {payload}) => {
                state.loading = false
                state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: 
            (state, {payload}) => {
                state.loading = false
                const tuitIndex = state.tuits.findIndex(t => t._id === payload._id)
                state.tuits[tuitIndex] = {
                    ...state.tuits[tuitIndex],
                    ...payload
            }
        }
    }
});

export default tuitsSlice.reducer;