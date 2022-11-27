import { createSlice } from "@reduxjs/toolkit"
import { getListShoe } from "./ShoeThunk"

const initialState = {
    listShoe:[],
    stateDefault:[],
}

export const shoeSlice = createSlice({
    name:"shoemenu",
    initialState:initialState,
    reducers:{
        searchShoe:(state,action)=>{
            const textSearch=action.payload
            if(textSearch===""){
                state.listShoe=state.stateDefault
            }
            state.listShoe = state.listShoe.filter(item=>item.name.trim().toLowerCase().includes(textSearch.trim().toLowerCase()))
        }
    },
    extraReducers:builder=>{
        builder.addCase(getListShoe.pending,(state,action)=>{

        }).addCase(getListShoe.fulfilled,(state,action)=>{
            state.stateDefault=action.payload.content
            state.listShoe = action.payload.content
        })
    }
})

export const {searchShoe} = shoeSlice.actions
export default shoeSlice.reducer