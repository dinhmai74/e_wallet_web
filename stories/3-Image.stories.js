import React from "react";
import { images } from '../src/theme'

export default {
  title: "Image source"
};


export const TestImage = () => (
  <div>
    <img src={images.home.general} className="image__decorate" alt="test" />
  </div>
);
