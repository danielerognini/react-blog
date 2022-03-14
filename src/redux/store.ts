import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const store = configureStore({
    reducer: { auth: authReducer },
    devTools: true
});

export type ReduxState = ReturnType<typeof store.getState>
export type AuthDispatch = typeof store.dispatch;

export default store;