import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer, { initialState as authState} from "./auth/authReducer";
import postsReducer, {initialState as postState} from "./posts/reducer";
import {AuthStorageType} from "./auth/types";
import { PostType} from "./posts/types";

export interface GlobalStore {
    auth: AuthStorageType,
    posts: PostType[]
}

const store = configureStore({
    reducer: combineReducers<GlobalStore>({ auth: authReducer, posts: postsReducer }),
    devTools: true
});

export type ReduxState = ReturnType<typeof store.getState>
export type AuthDispatch = typeof store.dispatch;

export default store;