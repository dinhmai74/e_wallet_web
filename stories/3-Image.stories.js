import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import { Image } from 'react-bootstrap'
import { images } from '../src/theme'

export default {
  title: "Image source"
};


export const TestImage = () => (
  <div>
    <img src={images.home} className="image__decorate" />
  </div>
);
