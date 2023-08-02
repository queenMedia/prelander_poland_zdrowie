import { css, cx} from "@emotion/css";

import * as responsive from "./Imagegroup.styles.responsive";
import { flex } from "@mixins";

export const imagegroup = cx(
  flex({ justify: "center", align: "flex-start", gap: "0px"}),
  css`
    width: 100%;
    ${responsive.imagegroup}
  `
);

export const imageLeft = cx(
  css`
    height: 100%;
    width: 59%;
    ${responsive.imagegroup}
  `
);

export const imageRight = cx(
  css`
    height: 100%;
    width: 41%;
    object-fit: cover;
    ${responsive.imagegroup}
  `
);