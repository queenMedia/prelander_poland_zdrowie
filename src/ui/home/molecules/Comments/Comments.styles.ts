import { cx, css } from "@emotion/css";

import * as responsive from "./Comments.styles.responsive";
import { flex } from "@mixins";
export const container = cx(
  flex({justify: "space-between", align: "center", gap: "0px"}),
  css`
    width: 100%;
    flex-direction: column;
  `
);

export const topText = cx(
  flex({justify: "space-between", align: "center", gap: "0px"}),
  css`
    width: 100%;
    margin: 15px 0 20px 0px;
    font-family: Tahoma;
    font-size: 14px;
    line-height: 18px;
    color: #3B5998;
  `
);

export const commentsContainer = cx(
  flex({justify: "flex-start", align: "center", gap: "0px"}),
  css`
    width: 100%;
    flex-direction: column;
  `
);