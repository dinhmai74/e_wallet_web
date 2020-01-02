import React from "react";
import { images } from "theme";
import { Hero } from "screens/Home/components/Hero";

export const IntroBuyGameCard: React.FC = () => {
  return (
    <Hero
      type="left"
      src={images.home.gaming}
      title="Game card"
      content={[
        "More money, more power!",
        "Let rule the game!"
      ]}
    />
  );
};
