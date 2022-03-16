import { createSelector } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

const getAuth = (state:ReduxState) => state.auth;

export const getUser = createSelector(
    [getAuth],
    auth => auth.user
)