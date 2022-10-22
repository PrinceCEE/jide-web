import { FC } from "react";
import { FontType } from "src/types";

const Font: FC<FontType> = ({ children, type }) => {
  return (
    <div className={`${type === "Manrope" ? "font-Manrope" : "font-Rebond"}`}>
      {children}
    </div>
  );
};

export const RebondFont: FC<Pick<FontType, "children">> = ({ children }) => {
  return <Font type="Rebond">{children}</Font>;
};

export const ManropeFont: FC<Pick<FontType, "children">> = ({ children }) => {
  return <Font type="Manrope">{children}</Font>;
};
