import { FC } from "react";
import { TextType } from "src/types";

export const Text: FC<TextType> = ({
  color = "",
  children,
  font = "",
  fontSize = "",
}) => {
  return <span className={`${color} ${font} ${fontSize}`}>{children}</span>;
};
