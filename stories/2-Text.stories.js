import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import styles from "./colors.module.scss";
import cx from "classnames"; // Optional classname helper library

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

export const TextOverrideColorByGlobal = () => (
  <div>
    <p className={cx("text__h1", styles.override)}>overrider h1 to primary</p>
  </div>
);