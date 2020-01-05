import React from "react";
import { Hero } from "screens/Home/components/Hero";
import { images } from "theme";

export const IntroBuyGameCard: React.FC = () => {
  return (
    <Hero
      type="left"
      src={images.home.gaming}
      title="Game card"
      content={["More money, more power!", "Let rule the game!"]}
    />
  );
};
