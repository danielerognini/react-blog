import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40rem;
          
            input {
              border: none;
              height: 2rem;
              margin: 2rem 0;
            }
        }
    }
`;