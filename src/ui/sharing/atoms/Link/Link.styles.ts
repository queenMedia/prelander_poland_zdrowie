import { css, cx } from "@emotion/css";
import type { Link } from "@typing/globals/styles";
import * as responsive from "./Link.styles.responsive";

export const link = ({color, bold, italic}: Link) => cx(
  css`
    ${color ? 
      css`
        color: var(--text-link);
      `
      : css`
        color: inherit;
      `
    }
    ${bold ? 
      css`
        font-weight: bold;
      `
      : css`
        font-weight: normal;
      `
    }
    ${italic ? 
      css`
        font-style: italic;
      `
      : css`
        font-style: normal;
      `
    }
    font-size: inherit;
    cursor: pointer;
  `
)
;
