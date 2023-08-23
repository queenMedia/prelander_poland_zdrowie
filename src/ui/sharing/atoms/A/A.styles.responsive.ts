import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const large_button = forsize({
    "tablet-landscape": css`
        width: 100%;
        font-size: 25px;
    `,
  });
