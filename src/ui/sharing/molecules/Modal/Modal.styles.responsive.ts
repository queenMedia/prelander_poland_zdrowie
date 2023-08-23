import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const modal_container = forsize({
    "tablet-portrait": css`
        width: 90%;
    `,
    
  });

export const title = forsize({
    "tablet-portrait": css`
        font-size: 18px;
    `,

});


export const subtitle = forsize({
    "tablet-portrait": css`
        font-size: 18px;
    `,
    
  });
