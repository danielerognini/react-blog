import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    * {
        margin-bottom: 1.5rem;
    }

    textarea {
        margin-bottom: 2rem;
        height: 10rem;
      
        box-sizing: border-box;
        resize: vertical;
        
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        padding: 1rem;
    }
  
    div{
        width: 100%;
      
        display: flex;
        flex-direction: column;
        align-items: center;
      
        * {
          margin-bottom: 0.5rem;
        }
    }
`;

export const Separator = styled.div`
    border: solid 1px #999999;
    width: 80%;
`;