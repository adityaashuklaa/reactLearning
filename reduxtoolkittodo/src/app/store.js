import {configureStore} from '@reduxjs/toolkit' // This is being imported from core redux, not redux toolkit.
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: todoReducer
});