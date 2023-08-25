import { css, cx } from "@emotion/css";

import * as responsive from "./home.styles.responsive";
import { content, flex } from "@mixins";

export const section = cx(
  content({ width: "1220px"}),
  flex({ justify: "center", align: "flex-start", gap: "20px"}),
  css`
  `,
  responsive.section,
);

export const error_container = cx(
  
  flex({ justify: "center", align: "center", gap: "20px"}),
  css`
   width: 100%;
   flex-direction: column;
  `
);


export const error_image = css`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export const error_text = css`
  font-size: 30px;
  color: #FF0000;
  weight: 900;
`;

export const loading_text = css`
  font-size: 30px;
  color: #000;
  weight: 900;
`;
