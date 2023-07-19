import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const content = css`
${forsize({ 
    "tablet-landscape":css`
        width: 100%;
    `
 })}
`;
