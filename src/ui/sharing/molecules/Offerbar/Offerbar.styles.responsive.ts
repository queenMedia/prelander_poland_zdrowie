import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const offerbar_button = forsize({
    "tablet-portrait": css`
        font-size: 20px;
    `,
    "phone-mid": css`
        font-size: 18px;
    `,
  });
