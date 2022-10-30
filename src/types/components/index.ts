import { ReactNode, MouseEventHandler } from "react";
import {
  ALIGN,
  BG_COLORS,
  FLEX_DIRECTION,
  FONT,
  FONT_SIZES,
  JUSTIFY,
  TEXT_COLORS,
} from "src/constants";

export type BoxType = {
  width?: string;
  height?: string;
  bg?: typeof BG_COLORS[number];
  border?: string;
  radius?: string;
  justify?: typeof JUSTIFY[number];
  align?: typeof ALIGN[number];
  flex?: string;
  flexDirection?: typeof FLEX_DIRECTION[number];
  margin?: string;
  padding?: string;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type FlexType = BoxType & {};

export type ButtonType = BoxType & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CardType = {};

export type IconType = {};

export type ImageType = {};

export type InputType = {};

export type TextInputType = {};

export type ParagraphType = {};

export type TextType = Pick<BoxType, "className" | "children"> & {
  onClick?: MouseEventHandler<HTMLSpanElement>;
  font?: typeof FONT[number];
  color?: typeof TEXT_COLORS[number];
  fontSize?: typeof FONT_SIZES[number];
};

export type HeadType = {};

export type FontType = {
  children: ReactNode;
  type: typeof FONT[number];
};
