import styled, {createGlobalStyle} from "styled-components";
import BGImage from './images/movies2-bg.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-size: 2rem;
    background-color: rgba(0,0,0,0.50);    
    padding: 0px 30px;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 5px;
    background-color: rgba(0,0,0,0.50);    
    padding: 0px 30px;
  }

  h1 {
    background-color: rgba(0,0,0,0.50);    
    padding: 0px 30px;
    font-size: 70px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

`