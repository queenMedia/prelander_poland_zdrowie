import { css, cx, keyframes } from "@emotion/css";

import * as responsive from "./Largebuttons.styles.responsive";
import { flex } from "@mixins";

const upto = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -7px;
  }
`;

export const container_to_center =cx(
  flex({ justify: "center", align: "center", gap: "0px"}),
  css`
    width: 100%;  
    z-index: -1;
`);

export const largebuttons = cx(
  flex({ justify: "center", align: "center", gap: "20px"}),
  css`
    width: 100%;
    padding: 25px 30px;
    position: relative;
    font-size: 30px;
    color: var(--text-white);
    background: var(--large-button-bg);
    border-radius: 10px;
    text-shadow: var(--text-shadow);
    text-transform: uppercase;
    z-index: -1;
    &:hover{
      animation: ${upto} 1s forwards;
    }
  `,
  responsive.largebuttons,
);
