import { css, cx } from "@emotion/css";

import * as responsive from "./Content.styles.responsive";
import { flex } from "@mixins";

export const content = cx(
  flex({ justify: "flex-start", align: "flex-start", gap: "20px"}),
  css`
  width: 60%;
  padding: 0 10px;
  flex-direction: column;
`, responsive.content);

export const container_to_center =cx(
  flex({ justify: "center", align: "center", gap: "0px"}),
  css`
  width: 100%;
`, responsive.content);

export const title = cx(
  css`
    font-size: 48px;
    font-weight: 400;
    color: var(--text-balck);
  `
);
export const sub_title = cx(
  css`
    font-size: 28px;
    font-weight: 900;
    color: var(--text-balck);
    font-family: Helvetica, Nue;
  `
);


export const em = cx(
  css`
    font-size: 17px;
    font-weight: 400;
    color: var(--text-balck);
  `
);

export const img = cx(
  css`
   width: 100%;
   height: auto;
  `
);

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

export const description = cx(
  css`
    width: 100%;
    font-size: 15px;
    font-style: italic;
    letter-spacing: -0.1px;
    color: var(--text-image-description);
    margin: 0;
    height: fit-content;
    text-align: center;
  `
);


