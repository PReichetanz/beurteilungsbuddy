import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
        --color-background-dark: #004643;
        --color-background-light: #abd1c6;
        --color-text-dark: #001e1d;
        --color-text-white: #fffffe;
        --color-text-lightgreen: #abd1c6;
        --color-button: #f9bc60;
        --color-button-hover: #f3a661;
        --color-buttonText: #001e1d;
        --color-stroke: #001e1d;
        --color-tertiary: #e16162;
        --color-tertiary-hover: #E77862;
    }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
