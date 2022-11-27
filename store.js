import { configureStore } from "@reduxjs/toolkit";
import ReduxReducer from "./redux/ReduxStateSlice";

export const store = configureStore({
    reducer:{
        ReduxReducer
    }
})