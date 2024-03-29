import { css, cx, keyframes } from "@emotion/css";
import IconClose from  "@icons/icon-close-white.svg";
import IconCloseB from  "@icons/icon-close-black.svg";
import {
  backgroundButtonColors,
  textButtonColors
} from "@utils/constants";


import * as responsive from "./Modal.styles.responsive";
import { flex } from "@mixins";
import type { Modal } from "@typing/globals/styles";

const expand = keyframes`
  0%,
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const modal = cx(
  flex({justify: "center", align: "center"}),
  css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--overlay);
    z-index: 200;
  `
);

export const modal_container = ({width, height, bg}: Modal) => cx(
  flex({justify: "flex-start", align: "center"}),
  css`
    width: ${width}px;
    height: ${height}px;
    background: url(${bg}) no-repeat center/cover;
    position: relative;
    padding: 20px;
    flex-direction: column;
    border: 3px solid var(--text-white);
  `,
  responsive.modal_container,
);

export const close_modal = (color: string) => cx(
  css`
    width: 35px;
    height: 35px;
    border: none;
    ${
      color === "#000" ? 
      css`
        background: url(${IconCloseB}) no-repeat center/cover;
      ` : 
      css`
        background: url(${IconClose}) no-repeat center/cover;
      `
    }
    position: absolute;
    top: 10px;
    right: 10px;
    
  `
);

export const title = (color: string) =>cx(
  css`
    color: ${color};
    font-size: 23px;
    font-weight: 700;
    text-align: center;
  `,
  responsive.title,
);

export const subtitle = (color: string) =>cx(
  css`
    color: ${color};
    font-size: 23px;
    font-weight: 700;
    text-align: center;
  `,
  responsive.subtitle,
);

export const button = (bg: string, color: string) =>cx(
  css`
    width: 200px;
    padding: 9px 20px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    color:${color} ;
    background : ${bg};
    font-family: "Roboto", sans-serif;
    animation: 1s ease 0s infinite normal none running ${expand};
    cursor: pointer;
    border: none;
  `
);

export const container_button = cx(
  css`
    position: absolute;
    bottom: 20px;
  `
);
