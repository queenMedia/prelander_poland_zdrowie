import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const sidebar = css`
    ${forsize({ 
        "tablet-landscape":css`
            display: none;
        `
    })}
`;