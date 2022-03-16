import styled from "styled-components";

export const PostWrapper = styled.div`
    padding: 1rem 14.5rem;
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
        font-weight: 200;
        padding: 0 2rem;
        width: 100%;
    }
  
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
  
    a {
      color: black;
    }
`;