import { css } from "@emotion/css";

import * as responsive from "./Scrollbar.styles.responsive";

export const scrollbar = (progressBarWidth: number) => css`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background-color: #007bff;
  width: ${progressBarWidth}%;
`;
