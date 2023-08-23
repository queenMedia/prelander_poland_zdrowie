import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const container = forsize({
    "phone-big": css`
        width: calc(100% - 20px);
        right: 10px;
        display: none;
    `,
  });