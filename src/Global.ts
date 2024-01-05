import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: rgba(200, 200, 200, 1);
        
    }
    a{
        text-decoration: none;

    }
    h1,h3{
        font-family: 'Inter', sans-serif;
    }
    p, a, button, span{
        font-family: 'Poppins', sans-serif;
    }
`;
