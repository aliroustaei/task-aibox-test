import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//Components
import WrapperFlexList from "./index";
import Molecules from "../../Molecules/ImageWithTextVertical";
//Image
import hardware from "../assets/images/hardware.svg";
import cloud from "../assets/images/cloud-icon.svg";
import AI from "../assets/images/AI icon.svg";

export default {
  title: "WrapperFlexList",
  component: WrapperFlexList,
} as ComponentMeta<typeof WrapperFlexList>;

const Template: ComponentStory<typeof WrapperFlexList> = (args) => (
  <WrapperFlexList {...args}>
    <Molecules
      text="متن‌باز و مستقل از سخت‌افزار"
      textSize="h3"
      image={hardware}
    />
    <Molecules text="مقیاس‌پذیری" textSize="h3" image={cloud} />
    <Molecules
      text="پشتیبانی از انواع ابزارهای هوش مصنوعی"
      textSize="h3"
      image={AI}
    />
  </WrapperFlexList>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  gap: 0,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  gap: 2,
};
