import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

export default {
  title: "Global Text style"
};

export const Text = () => (
  <div>
    <p className="text__b1">normal one</p>
    <p className="text__b1--primary">b1 primary</p>
    <p className="text__b1--blue-grey">b1 blue-grey</p>
  </div>
);
