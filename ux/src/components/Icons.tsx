import React from "react";
import IconSvg from "../assets/svg/FontIcons.svg";
import "../icons.css";
type Size = "small" | "medium" | "large";
interface IconProps {
  iconName?: string;
  size?: Size;
}

const Icon: React.FC<IconProps> = ({
  iconName = "sinco-document-check",
  size = "medium",
}) => {
  return (
    <svg className={size}>
      <use xlinkHref={`${IconSvg}#${iconName}`} />
    </svg>
  );
};

export default Icon;
