import styled from "styled-components";

export const StyledLogin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;
    
    p {
        font-weight: bold;
        font-size: 2.5rem;
    }
`;

export const Error = styled.div`
    background-color: red;
    color: white;
    border: solid red 0.25rem;
`;

export const Input = styled.input`
    border: none;
    border-radius: 0.5rem;
    color: black;
    background-color: white;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
`;

export const Button = styled.button`
    border: solid 0.25rem #8D4AE3;
    border-radius: 2rem;
    color: white;
    background-color: transparent;
    font-size: 1.5rem;
    margin: 1rem;
    padding: 0.75rem 1.75rem;
    :hover{
        background-color: #8D4AE3;
    }
`;