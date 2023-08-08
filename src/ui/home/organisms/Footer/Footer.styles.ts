import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./Footer.styles.responsive";


export const container = cx(
    flex({justify: "center", align: "center"}),
    css`
        width: 100%;
        margin: 10px 0 80px 0;
        font-family: "Roboto", sans-serif;
        ${responsive.container}
    `
);
export const content = cx(
    css`
        width: 1200px;
        ${responsive.content}
    `
);

export const footer_top = cx(
    flex({justify: "center", align: "center", gap: "15px"}),
    css`
        flex-direction: column;
        padding: 20px;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
    `
);
export const top_menu = cx(
    flex({justify: "center", align: "center", gap: "10px"}),
    css`
        list-style: none;
        color: #333;
        font-size: 12px;
        flex-wrap: wrap;
    `
);
export const top_item = cx(
    css`
        &:hover {
            color: rgba(34,34,34,.8);
        }
    `
);


export const footer_bottom = cx(
    flex({justify: "center", align: "center", gap: "15px"}),
    css`
        flex-direction: column;
        margin-top: 16px;
        color: #999;
        font-size: 12.5px;
    `
);
export const bottom_menu = cx(
    flex({justify: "center", align: "center", gap: "20px"}),
    css`
        list-style: none;
        flex-wrap: wrap;
    `
);
export const bottom_item = cx(
    css`
    `
);
