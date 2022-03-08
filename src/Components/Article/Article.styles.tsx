import styled from "styled-components";

export const StyledArticle = styled.div`
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h3 {
        margin-left: 0.25rem;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        color: white;
        font-weight: 200;
        padding: 0 2rem;
        width: 100%;

        h3{
            color: white;
        }
    }
`;