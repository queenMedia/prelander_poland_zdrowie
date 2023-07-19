import { css, cx } from "@emotion/css";

import * as responsive from "./Imagedescription.styles.responsive";
import { flex, bgimage } from "@mixins";

export const imagedescription = cx(
  flex({ justify: "center", align: "center", gap: "10px"}),
  css`
    width: 100%;
    flex-direction: column;
  `
);

export const image = cx(
  css`
    width: 100%;
    height: auto;
    obect-fit: content;
  `
);

export const description = (size: string) =>cx(
  css`
    font-size: ${size}px;
    font-style: italic;
  `
);
