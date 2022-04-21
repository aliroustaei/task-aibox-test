import React, { FC } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

interface TagProps {
  label: string;
  backgroundColor: string;
  size: "sm" | "md" | "lg";
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<TagProps> = ({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
}) => {
  const Btn = styled("button")({
    backgroundColor: backgroundColor,
    padding: size === "sm" ? "0.75rem" : size === "lg" ? "1.3rem" : "1rem",
    border: "none",
  });

  return <Btn onClick={handleClick}>{label}</Btn>;
};

// Button.propTypes = {
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   onclick: PropTypes.func,
// };

export default Button;
