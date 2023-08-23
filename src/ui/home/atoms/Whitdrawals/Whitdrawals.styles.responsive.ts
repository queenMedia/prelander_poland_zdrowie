import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const container = forsize({
    "phone-big": css`
        display: none;
    `,
  });