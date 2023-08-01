import { css, cx, keyframes } from "@emotion/css";
import ArrowDown from "@icons/arrow_down.png";

import * as responsive from "./Readmore.styles.responsive";
import { flex, bgimage } from "@mixins";

const scaleX = keyframes`
  0% {
    width: 90%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

export const container = cx(
  flex({ justify: "center", align: "center"}),
  css`
    width: 100%;
  `
);

export const readmore = cx(
  flex({ justify: "center", align: "center"}),
  css`
    width: 90%;
    padding: 10px 0;
    flex-direction: column;
    border-radius: 5px;
    background: var(--bg-read-more);
    transition: width 0.5s;
    font-size: 30px;
    text-transform: uppercase;
    text-shadow: var(--text-shadow);
    transition: width 0.5s;
    color: var(--text-white);
    &:hover{
      animation: ${scaleX} 1s forwards;
    }
    &::after{
      ${bgimage({ image: ArrowDown, size: "cover" })}
      display: block;
      content: "";
      width: 30px;
      min-width: 30px;
      height: 30px;
      min-height: 30px;
    }
`
);
