import { css, cx } from "@emotion/css";

import * as responsive from "./Whitdrawals.styles.responsive";
import { flex } from "@mixins";

export const container = cx(
    css`
        width: 400px;
        color: #fff;
        height: 78px;
        padding: 10px 20px 30px 110px;
        position: fixed;
        left: 10px;
        background: rgba(0,0,0,0.9);
        border-radius: 3px;
        overflow: hidden;
        font-size: 13px;
        z-index: 350;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        transition: bottom 0.5s ease-out;
    `
);
export const img = css`
    position: absolute;
    top: 0;
    left: 0;
    height: 78px;
    width: 78px;
`;

export const description = cx(
    css`
        width: 100%;
        font-size: 13px;
    `
);
export const nowText = cx(
    css`
        width: 100%;
        font-size: 12px;
        text-align: right;
    `
);