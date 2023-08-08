import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const content = forsize({
  "tablet-portrait": css`
  
  `,

  "desktop-mid": css`
    width: 100%;
  `
});

export const top_left_menu = forsize({
  "tablet-landscape": css`
    display: none;
  `,

});

export const top_right_menu = forsize({
  "tablet-landscape": css`
    position: relative;
    gap: 0px;

    & > li:nth-child(-n+2),
    & > li:nth-child(4n+4),
    & > li:nth-child(5) {
      display: none;
    }

    & > li:nth-child(6) {
      display: flex;
      padding-left: 10px;
      border-left: 1px solid #e5e5e5;
      height: 5px;
    }
  `,
});


export const bottom_menu_container = forsize({
  "tablet-landscape": css`
    display: none;
  `,
});

export const bottom_section = forsize({
  "tablet-landscape": css`
    height: 60px !important; 
    align-items: center;

  `,
});

export const iconBurger = forsize({
  "tablet-landscape": css`
    display: block;
    position: absolute;
    bottom: calc(50% - 10px);
    right: 15px;
  `,
});
export const bottom_content = forsize({
  "tablet-landscape": css`
    height: 60px !important; 
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  `,
});

export const zdrowie_text = forsize({
  "tablet-landscape": css`
    font-size: 32px;
    margin: 0px;
    background: transparent;

    padding: 15px 0px;
    &::after {
      bottom: 25px;
      height: 10px;
    }

  `,
});