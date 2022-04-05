import styled from "styled-components";

export const Main = styled.main`
    background-color: #FFA8A8;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    padding: 1.5rem;
    margin-top: 30px;
    text-align: center;
`

export const Container = styled.div`
    width: 325px;
    margin: 0 auto; 


`

export const ButtonContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center; 
    margin: 20rem auto;
    gap: 2vw;

    @media (min-width: 667px) {
        
        justify-items: center;
    
      }
    
    @media (min-width: 1024px) {
        width: 800px;
        margin: 0 auto; 
        display: flex; 
        flex-direction: row;
        justify-content: center; 
        align-items; center;
        justify-content: space-between;  
    }

`

export const Button = styled.button`
    width: 160px;
    color: black;
    border-radius: 8px;
    padding: 3px;
    margin-bottom: 5px;
    background-image: linear-gradient(120deg,#FFA8A8,#f8ffba);
    font-size: 18px;

    @media (min-width: 768px) {
        
      }

    @media (min-width: 1024px) {
        width
       
    }

`
