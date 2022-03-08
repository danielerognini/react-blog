import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;

    background-color: #3A3A3A;
    color: white;

    font-weight: 500;

    a {
        color: white;
        text-decoration: none;
    }

    p {
        /*padding: 0.35rem 1.5rem;*/
        padding: 0.75rem 1rem;
        margin: 0.8rem 0rem;
    }

    p:hover {
        background-color: #8D4AE3;
        border-radius: 1rem;
    }
`;

export const Left = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    /*background-color:blue; /* <- DELETE THiS */
`;

export const Right = styled.div`
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    /*background-color:red; /* <- DELETE THiS */
`;
