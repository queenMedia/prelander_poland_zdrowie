import { css, cx, keyframes } from "@emotion/css";
import { flex } from "@mixins";

import * as responsive from "./Loader.styles.responsive";


const tri_spinner = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const cycle_words = keyframes`
  10% {
    -webkit-transform: translateY(-105%);
    transform: translateY(-105%);
  }

  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  35% {
    -webkit-transform: translateY(-205%);
    transform: translateY(-205%);
  }

  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }

  60% {
    -webkit-transform: translateY(-305%);
    transform: translateY(-305%);
  }

  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }

  85% {
    -webkit-transform: translateY(-405%);
    transform: translateY(-405%);
  }

  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
`;

export const spinnerContainer = cx(
  flex({justify: "center", align: "center"}),
  css`
    flex-direction: column;
    position: fixed;
    width: 100vw;
    height: 100vh;
  `
)
;

export const spinner = cx(
  css`
    width: 56px;
    height: 56px;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: #299fff;
    animation: ${tri_spinner} 1s infinite linear;
    &::before{
      content: "";
      grid-area: 1/1;
      margin: 2px;
      border: inherit;
      border-radius: 50%;
      animation: ${tri_spinner} 2s infinite;
    }
    &::after{
      content: "";
      grid-area: 1/1;
      margin: 2px;
      border: inherit;
      border-radius: 50%;
      animation: ${tri_spinner} 2s infinite;
      margin: 8px;
      animation-duration: 3s;
    }
  `
)
;

export const loader = cx(
  css`
    color: #4a4a4a;
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: 35px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
  `
)
;

export const words = cx(
  css`
    overflow: hidden;
    min-width: 150px;
  `
)
;

export const loading_text = cx(
  flex({justify: "center", align: "center"}),
  css`
  font-size: 30px;
`
);

export const word = cx(
  css`
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #299fff;
    animation: ${cycle_words} 5s infinite;
    font-size: 30px;
  `
)
;

