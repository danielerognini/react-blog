import React, {useCallback, useState} from 'react';
import Header from '../common/header/Header';
import { StyledLogin, Form, Error, Input } from './styled';
import {Button} from "../common/styled/styled";
import useAuth from "../common/hooks/useAuth";
import {useHistory} from "react-router-dom";

const Login = () => {
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const [ isError, setIsError ] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    const handleChange = useCallback((event: any) => {
        if(event.target.type === 'text') {
            setEmail(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }, [setEmail, setPassword])

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        login({email, password});
        //setIsError(!isLoginSucceded);
        history.push('/');
    }, [login, email, password])

    return(
        <div>
            <Header />
            <StyledLogin>
                <Form>
                    <p>Log In</p>
                    <Input required type="text" onChange={handleChange} placeholder="username or email"/>
                    <Input required type="password" onChange={handleChange} placeholder="password"/>
                    <Button onClick={handleSubmit}> Log In </Button>
                    {isError && <Error>Si è verificato un problema con le credenziali utilizzate, riprova!</Error>}
                </Form>
            </StyledLogin>
        </div>
    );
}

export default Login;