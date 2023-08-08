import { css, cx } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./Header.styles.responsive";

export const container = cx(
  flex({justify: "center", align: "center"}),
  css`
    width: 100%;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    position: fixed;
    top: 0;
    margin-bottom: 170px;
  `,
);
export const top_section = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
    width: 100%;
    position: relative;
    left: 0;
    width: 100%;
    z-index: 10;
    background: #fff;
    transform: translateY(0);
    transition: all .5s ease-out;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
  `,
);

export const content = cx(
  flex({justify: "space-between", align: "center", gap: "10px"}),
  css`
    width: 1200px;
    height: 40px; 
  `
);

export const top_left = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`

    & > span:first-child {
      margin-right: 20px;
    }
  `,
);
export const top_left_menu = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
    display: flex;
    list-style: none;
  `,
);

export const top_left_item = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    height: 100%;
    font-family: calibre;
    font-size: 12px;
    line-height: 30px;
    text-transform: uppercase;
  `,
);
export const top_right = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
  `,
);
export const top_right_menu = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
    display: flex;
    list-style: none;

    & > li:nth-child(5) {
      background: transparent linear-gradient(135deg,#459c5f,#347a4c) 0 0 no-repeat padding-box;
      order: 3;
      height: 40px;
    }
  `,
);
export const top_right_item = cx(
  flex({justify: "center", align: "center", gap: "10px"}),
  css`
    padding: 10px;
    display: flex;
    align-items: center;
    letter-spacing: 0;
    color: #444;
    text-transform: uppercase;
  `,
);

export const arrow_icon = (img: string) => cx(
  css`
    background-image: url("${img}");
    background-repeat: no-repeat;
    background-position: 50%;
    width: 44px;
    height: 33px;
    cursor: pointer;
  `
);

export const bottom_section = (progress: number) => {
  let movement = '0px';
  if(progress >17.5)
    movement = "-500px";
  
  return cx(
    flex({justify: "center", align: "center", gap: "10px"}),
    css`
      width: 100%;
      height: 130px;
      position: relative;
      background: #fff;
      z-index: 3;
      box-shadow: inset 0 -1px #e5e5e5;
      transform: translateY(${movement});
      transition: all 1.5s ease;
    `,
  )
}
export const bottom_content = cx(content,
  flex({justify: "flex-start", align:"flex-end"}),
  css`  
    flex-direction: row;
    flex-wrap: wrap;
    height: 130px !important; 

  `,
);
export const zdrowie_text = cx(
  css`
    width: 100%;
    display: inline-block;
    background: #fff;
    font: 700 45px/40px calibre,sans-serif;
    color: #222;
    position: relative;
    bottom: 8px;
    z-index: 1;
    padding: 26px 0 14px;
    margin: 1px 0;
    transition: all .2s ease-out;
    width: fit-content;
    height: 80px;
    font-weight: bold;
    letter-spacing: -1.5px;
    font-size: 42px;

    &:hover {
      color: rgba(34,34,34,.8);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 65%;
      height: 15px;
      z-index: -1;
      transition: width .3s ease-out;
      background: transparent linear-gradient(90deg,#d9ed00,#3bd93b 100%,#3bd93b 0) 0 0 no-repeat padding-box;
    }
    &:hover:after {
      width: 90%;
    }
  `,
);
export const bottom_menu_container = cx(
  flex({justify: "space-between", align:"center", gap: "20px"}),
  css`
    width: 100%;
    list-style: none;
    position: relative;
  `,
);
export const bottom_menu = cx(
  flex({justify: "flex-start", align:"center", gap: "20px"}),
  css`
    width: 100%;
    list-style: none;
    position: relative;
  `,
);
export const bottom_item = cx(
  css`
    height: 27px;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;

    &:hover {
      color: rgba(34,34,34,.8);
    }
    &:hover::after {
      transform: scale(1);
    }
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #3bd93b;
      transition: all .3s ease-out;
      transform: scale(0);
    }
   
  `,
);