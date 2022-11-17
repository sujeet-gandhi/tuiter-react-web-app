import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuiter-services"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async () => await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        return await service.createTuit(tuit)
    }
)

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            return await service.updateTuit(tuit)
        }
    )
