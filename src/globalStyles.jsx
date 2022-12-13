import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --blue: #00D2DF;
        --gradient-pink: linear-gradient(#D24074, #6518B4);
        --gradient-pueple: linear-gradient(##9358F7, ##10D7E2);
        --dark: #121212;
        --dark-200: #151515;
        --gray-light: ##c4c4c4;
        --light: #ffffff;
    }

    
    body, html {
        font-family: 'Inter', sans-serif;
        font-size: 62.5%;
    }

 
`

export default GlobalStyle;