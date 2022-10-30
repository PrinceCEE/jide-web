import { FC } from "react";
import { BoxType } from "src/types";

export const Box: FC<BoxType> = ({
  children,
  width = "",
  height = "",
  bg = "",
  border = "",
  radius = "",
  className = "",
  justify = "",
  align = "",
  flex = "",
  flexDirection = "",
  padding,
  margin,
  onClick = () => {},
}) => {
  return (
    <div
      className={`${width} ${height} ${bg} ${border} ${radius} ${className} ${justify} ${align} ${flex} ${flexDirection} ${margin} ${padding}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
