import styled from "styled-components";

export const HomeBody = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const StyledList = styled.div`
    margin: 1rem 0;
    a{
      color: white;
      text-decoration: none;
    }
`;

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    padding: 0.75rem 0.5rem;
    margin: 2rem 2rem;
    border: solid white 0.15rem;
    border-radius: 1rem;

    img {
        width: 500px;
        height: 200px;
    }
  
    :hover{
        border: solid #8D4AE3 0.15rem;
    }

    cursor: pointer;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: none;
    margin: 0 0 0 2rem;
    padding: 0.75rem 0.5rem 0.75rem 0rem;

    h1, h3, p{
        margin: 0 1rem 0 0;
        padding: 0;
    }
  
    svg {
        fill: white;
        width: 1.5rem;
        height: 1.5rem;
    }
`;