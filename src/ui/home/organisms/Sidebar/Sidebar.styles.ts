import { css, cx } from "@emotion/css";

import * as responsive from "./Sidebar.styles.responsive";
import { flex } from "@mixins";

export const container = cx(
  flex({ justify: "center", align: "center", gap: "5px"}),
  css`
    width: 40%;
    padding: 0 10px;
    flex-direction: column;
  `,
  responsive.sidebar
);
