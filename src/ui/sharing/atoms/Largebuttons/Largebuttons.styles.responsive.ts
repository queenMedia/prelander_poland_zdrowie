import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const largebuttons = forsize({
    "tablet-landscape": css`
        width: 90%;
        font-size: 25px;
        padding: 15px 0px;
    `,
    "tablet-portrait": css`
        font-size: 20px;
    `,
    "phone-big": css`
        width: 100%;
        font-size: 15px;
        padding: 15px 0px;
    `,
  });
