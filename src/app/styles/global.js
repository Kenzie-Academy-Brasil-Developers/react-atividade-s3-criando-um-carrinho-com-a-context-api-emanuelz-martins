import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    }
    
    html, body {
        max-width: 100vw;
        min-height: 100vh;
    }

    button {
        background: none;
        border: none;

        :focus {
            outline: none;
        }
    }

    .App {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        @media (min-width: 1024px) {
            flex-direction: row;
        }
    }
`;
