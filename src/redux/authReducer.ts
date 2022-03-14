import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthType, LoginPropsType, UserType} from "./types";

const users: UserType[] = [
    {
        "id": 0,
        "name": "John",
        "isAdmin": false,
        "email": "root",
        "password": "root"
    },
    {
        "id": 1,
        "name": "Dani",
        "isAdmin": true,
        "email": "dani@email.com",
        "password": "1234"
    }
]

const loadUserFromLocalStorage = () => {
    const user: string | null = localStorage.getItem('user');
    if(user) {
        return JSON.parse(user);
    }
    return undefined
};

const initialState: AuthType = {
    user: loadUserFromLocalStorage()
};

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<LoginPropsType> ) => {
            const {email, password} = action.payload;
            const currentLocalUser = users.filter(user => user.email === email && user.password === password)[0]
            if(currentLocalUser) {
                // Login successo
                localStorage.setItem('user', JSON.stringify(currentLocalUser))
                //setCurrentUser(currentLocalUser)
                return { ...state, user: currentLocalUser};

            }
            return { ...state, user: undefined};
        },
        logout: (state) => {
            localStorage.removeItem('user');
            return {...state, user: undefined};
        }
    }
})

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;