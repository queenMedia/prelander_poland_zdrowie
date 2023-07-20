import { css, cx } from "@emotion/css";

import * as responsive from "./Imagedescription.styles.responsive";
import { flex, bgimage } from "@mixins";

export const imagedescription = cx(
  flex({ justify: "center", align: "center", gap: "5px"}),
  css`
    width: 100%;
    flex-direction: column;
  `
);

export const image = cx(
  css`
    width: 100%;
    height: auto;
  `
);

export const description = (size: string) =>cx(
  css`
    font-size: ${size}px;
    font-style: italic;
    letter-spacing: -0.1px;
    color: var(--text-image-description);
    margin: 0;
    height: fit-content;
  `
);

