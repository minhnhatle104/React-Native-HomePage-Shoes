import { createSlice } from "@reduxjs/toolkit"
import { getListShoe } from "./ShoeThunk"

const initialState = {
    listShoe:[]
}

export const shoeSlice = createSlice({
    name:"shoemenu",
    initialState:initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(getListShoe.pending,(state,action)=>{

        }).addCase(getListShoe.fulfilled,(state,action)=>{
            state.listShoe = action.payload.content
        })
    }
})

export default shoeSlice.reducer