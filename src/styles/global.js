import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  
}

body{
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    color:${({theme})=>theme.COLORS.WHITE};
    -webkit-font-smooth: antialiased;
}
body, input, button, testArea{
    font-family: 'Roboto Slab', serif;
    outline: none;

}






`