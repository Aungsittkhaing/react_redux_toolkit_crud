import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./endpoint/UserReducer";

export const store = configureStore({
    reducer : {
        users : UserReducer
    }
});