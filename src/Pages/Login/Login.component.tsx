import React, { useState } from 'react';
import Header from '../../Components/Header/Header.component';
import { StyledLogin, Form, Error, Input, Button } from './Login.styles';

interface props {
    user:any;
    getUsers:Function;
    setUser:Function;
};

const Login = (props:props) => {
    const { user, getUsers, setUser } = props;

    const [ access, setAccess ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    let users:Array<any> = getUsers();
    let error:boolean = false;

    function handleChange(event:any) {
        if(event.target.type === 'text') {
            setAccess(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }

    function handleSubmit() {
        if(users.map(user => {if(user.name === access || user.email === access && user.password === password){return true}})){
            setUser();
            error = false;
        }
        else {
            error = true;
        }
    }

    return(
        <div>
            <Header user={user} />
            <StyledLogin>
                <Form onSubmit={handleSubmit}>
                    <p>Log In</p>
                    {
                        error ? <Error></Error> : <></>
                    }
                    <Input required type="text" onChange={handleChange} placeholder="username or email"/>
                    <Input required type="password" onChange={handleChange} placeholder="password"/>
                    <Button type="submit"> Log In </Button>
                </Form>
            </StyledLogin>
        </div>
    );
}

export default Login;