import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const content = css`
${forsize({ 
    "tablet-landscape":css`
        width: 100%;
    `
 })}
`;

export const title = css`
${forsize({ 
    "tablet-landscape":css`
        font-size: 30px;
        line-height: 35px;
    `
 })}
`;
