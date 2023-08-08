import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const content = forsize({
  "tablet-landscape": css`
    width: 100%;
  `,
});

export const container = forsize({
  "tablet-landscape": css`
    margin: 10px 0 110px 0;
  `,
});