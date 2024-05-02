import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}


body{
    background-color:${({theme}) => theme.COLORS.bg_color};
    color: white;

    display: grid;
    place-items: center;
    height:100vh;
}

h1{
    font-size: 30px;
    letter-spacing: 1px;
}

p{
    font-size: 16px;
    margin-bottom: 20px;
}
`