import React, {useCallback, useState} from 'react';
import Header from '../common/header/Header';
import { StyledLogin, Form, Error, Input, Button } from './styled';
import useAuth from "../common/hooks/useAuth";

const Login = () => {
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const [ isError, setIsError ] = useState(false);

    const { login } = useAuth()

    const handleChange = useCallback((event: any) => {
        if(event.target.type === 'text') {
            setEmail(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }, [setEmail, setPassword])

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault()
        const isLoginSucceded = login(email, password)
        setIsError(!isLoginSucceded)
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