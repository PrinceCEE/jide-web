import { FC } from "react";
import { ButtonType } from "src/types";
import { Box } from "../Box";

export const Button: FC<ButtonType> = ({
  children,
  onClick = () => {},
  className = "",
  width,
  height,
  bg,
  radius,
  border,
  flex,
  flexDirection,
  justify,
  align,
  padding,
  margin,
}) => {
  return (
    <button onClick={onClick} className={`${className} overflow-hidden`}>
      <Box
        className="w-full h-full"
        width={width}
        height={height}
        bg={bg}
        radius={radius}
        border={border}
        flex={flex}
        flexDirection={flexDirection}
        justify={justify}
        align={align}
        padding={padding}
        margin={margin}
      >
        {children}
      </Box>
    </button>
  );
};

export const TextButton: FC<ButtonType> = ({ children }) => {
  return <span>{children}</span>;
};
