import { css, cx, keyframes } from "@emotion/css";

import * as responsive from "./Offerbar.styles.responsive";
import { flex } from "@mixins";
const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
export const offerbar = cx(
  flex({justify: "center", align: "center"}),
  css`
    width: 100%;
    height: max-content;
    padding: 10px;
    background: var(--bg-offer-bar);
    position: fixed;
    z-index: 9999;
    bottom: 0px;
    left: 0px;
  `
);

export const offerbar_button = cx(
  css`
    padding: 5px 8px;
    font-family: "Source Code Pro", monospace;
    font-weight: 400;
    color: var(--text-white);
    background: var(--bg-offer-bar-button);
    font-size: 26px;
    border-radius: 4px;
    text-decoration: none;
    animation: ${shake} 1.2s cubic-bezier(.36,.07,.19,.97) both infinite;
  `
);
