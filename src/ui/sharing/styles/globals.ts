import { injectGlobal } from "@emotion/css";

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    margin: 0;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  :root {
    --large-button-bg: #f18b06;
    --text-white: #FFF;
    --text-shadow: rgba(0,0,0,.3) 0 2px 3px;
    --bg-read-more: #e20714;
    --text-image-description: #333;
    --text-link: #0198bd;
    --overlay: rgba(0, 0, 0, 0.5);
    --bg-offer-bar: rgba(0, 0, 0, 0.7);
    --bg-offer-bar-button: #eb6769;

    --calibre-font: 'calibre', sans-serif;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  html {
    /* color: var(--text-white); */
    font-size: 62.5%;
    font-family: var(--primary-font);
  }
  body {
    min-height: 100vh;
    font-size: 1.6rem;
  }
  a,
  input,
  select,
  textarea,
  button {
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
  }
  /* a {
    text-decoration: none;
  } */
  a,
  button {
    &:hover {
      cursor: pointer;
      transition: all 0.1s linear;
    }
  }

  #modal-root,
  #loader-root {
    position: absolute;
  }

  #modal-root {
    z-index: 5;
  }
  #loader-root {
    z-index: 10;
  }
`;

export * as layout from "./layout.styles";
