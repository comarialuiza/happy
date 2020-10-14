import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-background: #ebf2f5;

        --color-primary: #29B6D1;
        --color-secondary: #00C7C7;
        --color-tertiary: #ffd666;
        --color-quaternary: #96feff;
        --color-text-title: #1f1f1d;
        --color-description: #9ab;
        --color-text-complement: #DDDDDD;
        --color-button-text: #FFFFFF;
        --color-white: #FFFFFF;

        --color-success: #52c41a;
        --color-danger: #faad14;
        --color-error: #ff4d4f;

        --color-overlay: rgba(23, 23, 23, 0.8);

        --color-overlay-light: rgba(23, 23, 23, 0.2);

        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: var(--color-white);
        background: var(--color-background);
    }

    body, input, button, textarea {
        font: 600 18px Nunito, sans-serif;
    }
`;