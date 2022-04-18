import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices/uiSlice";
import { formSlice } from "./slices/formSlice";
export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        form:formSlice.reducer
    }
})