import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/wallpaper.jpg";

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
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .progress {
        width: 80%;
        height: 10px;
        border-radius: 30px;
        background-color: rgb(232, 232, 232);
        margin-bottom: 25px;
    
        &-inner {
          height: 100%;
          border-radius: 30px;
          width: 80%;
          background: rgb(18, 231, 48);
          transition: all 0.3s ease-in-out;
          background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
        }
      }

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
            sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ee);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-weight: 700;
        font-size: 56px;
        text-align: center;
    }

    .start,
    .next {
        cursor: pointer;
        background-image: linear-gradient(180deg, #eee, #87f1ee);
        border: 2px solid #87f1ee;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;