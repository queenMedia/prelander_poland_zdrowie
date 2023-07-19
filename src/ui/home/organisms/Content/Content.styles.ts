import { css, cx } from "@emotion/css";

import * as responsive from "./Content.styles.responsive";
import { flex } from "@mixins";

export const content = cx(
  flex({ justify: "center", align: "center", gap: "20px"}),
  css`
  width: 60%;
  padding: 0 10px;
  flex-direction: column;
`, responsive.content);
