import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};
