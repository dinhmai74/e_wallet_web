import React from "react";
import { Hero } from "screens/Home/components/Hero";
import { images } from "theme";

export const IntroBuyPhoneCard: React.FC = () => {
  return (
    <Hero
      type="left"
      src={images.home.mobile}
      title="Mobile card"
      content={[
        "With us, discount is just a number.",
        "More buy, more discount."
      ]}
    />
  );
};
