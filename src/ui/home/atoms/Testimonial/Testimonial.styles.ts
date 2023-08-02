import { css, cx } from "@emotion/css";

import * as responsive from "./Testimonial.styles.responsive";
import { flex } from "@mixins";

export const container = cx(
    css`
        width: 100%;
        margin: 0;
        flex-direction: column;
    `
);
export const title = cx(
    css`
        width: 100%;
        text-align: left;
        color: #666;
        border-bottom: 2px solid #0198bd;
        margin-bottom: 15px;
        font-family: 'TuFuente';
        margin: 8px 0 20px 0;
        font-size: 20px;
        line-height: 28px;
    `
);
export const img = css`
    width: 100%;
`;

export const description = cx(
    css`
        width: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0 0 5px 0;
        line-height: 29px;
        font-size: 18px;
        letter-spacing: -0.1px;
        color: #333;
        text-align: left;
        font-style: italic;    

        & > span  {
            color: #0198bd;
            cursor: pointer;
            text-decoration: none;
        }
    `
);
export const name = css`
    width: 100%;
    font-weight: 700;
    font-weight: bold;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0 0 0 0;
    line-height: 29px;
    font-size: 18px;
    letter-spacing: -0.1px;
    color: #333;
    text-align: left;
    font-style: italic;
`;
