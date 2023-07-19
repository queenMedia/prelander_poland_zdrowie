import { css, cx } from "@emotion/css";

import * as responsive from "./Sidebar.styles.responsive";

export const sidebar = cx(css`
  width: 40%;
  padding: 0 10px;
`, responsive.sidebar);
