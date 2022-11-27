import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListShoe = createAsyncThunk(
    'shoes/getListShoe',
    async ()=>{
        try{
            const resp = await fetch("http://svcy3.myclass.vn/api/Product")
            const json = resp.json()
    
            return json
        }catch(error){
            console.log(error)
            throw error
        }
    }
)