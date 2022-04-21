import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageWithTextVertical from "./index";

export default {
  title: "ImageWithTextVertical",
  component: ImageWithTextVertical,
} as ComponentMeta<typeof ImageWithTextVertical>;

const Template: ComponentStory<typeof ImageWithTextVertical> = (args) => (
  <ImageWithTextVertical {...args} />
);

export const MoleculesOne = Template.bind({});
MoleculesOne.args = {
  text: "متن‌باز و مستقل از سخت‌افزار",
  textSize: "h4",
};
