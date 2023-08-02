import { css, cx } from "@emotion/css";

import * as responsive from "./Comment.styles.responsive";
import { flex } from "@mixins";

export const container = cx(
    flex({justify: "center", align: "center", gap: "15px"}),
    css`
        width: 100%;
        margin: 0;
        padding: 8px 0;
        border-bottom: 1px solid #E2E2E2;
        
        & > span:nth-child(2) {
            width: 100%;
        }
    `
);
export const img = css`
    
`;
export const content = cx(
    flex({justify: "flex-start", align: "center", gap: "0"}),
    css`
        width: 90%;
        flex-direction: column;
        text-align: left;
    `
);
export const userName = cx(
    css`
        width: 100%;
        text-align: left;
        font-family: Tahoma;
        font-size: 13px;
        color: #3B5998;
        margin: 0 0 5px 0;
        line-height: 14px;
        font-weight: bold;
    `
);
export const commentText = css`
    width: 100%;
    font-family: Tahoma;
    font-size: 12px;
    color: #1A1A1A;
    line-height: 15px;
    margin: 0 0 5px 0;
`;
export const socialText = css`
    width: 100%;
    color: #3B5998;
    font-family: Tahoma;
    font-size: 12px;
    line-height: 15px;
    margin: 0 0 5px 0;
`;
export const timeText = css`
    color: #808080;
    border-bottom: 1px dotted #808080;
`;