import {useCallback} from 'react'
import {useHistory} from "react-router-dom";
import {AuthStorageType, LoginPropsType, UserType} from "../../../redux/auth/types";
import {useDispatch, useSelector} from "react-redux";
import {login as reduxLogin, logout as reduxLogout} from '../../../redux/auth/authReducer';
import {getUser} from "../../../redux/auth/selector";

interface ReturnType {
    user: AuthStorageType['user']
    login: (props: LoginPropsType) => void
    logout: () => void
}

const useAuth = (): ReturnType => {
    //const {user} = useSelector((state: ReduxState) => state.auth)
    const user = useSelector(getUser);

    const history = useHistory();
    const dispatch = useDispatch();

    const login = useCallback((props:LoginPropsType) => {
        dispatch(reduxLogin(props));
    }, [dispatch]);

    const logout = useCallback(() => {
        dispatch(reduxLogout())
        //history.push('/login');
        }, [dispatch]);

    return {
        user,
        login,
        logout,
    }
}

export default useAuth;
