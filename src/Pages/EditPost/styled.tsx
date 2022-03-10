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
            width: 60rem;
          
            div {
                width: 40rem;
                display: flex;
                flex-direction: row;
              
                span, h3 {
                  margin-right: 1rem;
                }
              
                input {
                  border: none;
                  height: 2rem;
                  margin: 1rem 0;
                  color: white;
                  background-color: #202020;
                }

                .title {
                    display: block;
                    font-size: 2em;
                    font-weight: bold;
                }
                
                textarea {
                  margin-bottom: 2rem;
                  height: 10rem;
                  color: white;
                  background-color: #202020;
                  box-sizing: border-box;
                  width: 60rem;
                  resize: vertical;
                  
                  font-size: 1rem;
                  font-family: 'Poppins', sans-serif;
                  padding: 1rem;
                }
              
                &.content-wrapper {
                  margin-top: 3rem;
                  display: flex;
                  flex-direction: column;
                  align-items: start;
                }
                
                &.button-wrapper {
                  width: 60rem;
                  justify-content: center;
                  a {
                    text-decoration: none;
                    color: white;
                  }
                }
            }
        }
    }
`;