import { css, cx } from "@emotion/css";

import * as responsive from "./layout.styles.responsive";

import { flex } from "@mixins";

export const main = cx(
  flex({ justify: "center", align: "center"}),
  css`
    width: 100%;
    margin-top: 110px;
  `,
  responsive.main,
);
