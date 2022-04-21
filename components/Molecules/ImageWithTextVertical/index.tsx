import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import hardware from "../assets/images/hardware.svg";

interface propsType {
  text: string;
  textSize: "h3" | "h4" | "h5";
  image: string;
}

const ImageWithTextVertical = ({ text, textSize, image }: propsType) => {
  return (
    <Box role="box" textAlign="center">
      <Image
        src={image ? image : hardware}
        alt=""
        width={130}
        height={130}
        unoptimized
      />
      <Typography
        role="typography"
        mt="1rem"
        variant={textSize}
        fontSize="20px"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ImageWithTextVertical;
