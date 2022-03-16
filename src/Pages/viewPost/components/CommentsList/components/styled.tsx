import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 1rem 0;
  
    border: solid 1px black;
    border-radius: 0.5rem;
  
    p, span, h3 {
        margin: 0;
    }
`;

export const CommentInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
        color: #999999;
    }
`;

export const CommentText = styled.div`
    margin-top: 0.5rem;
`;