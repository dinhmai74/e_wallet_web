import React from "react";
import styles from "./colors.module.scss";
import cx from "classnames"; // Optional classname helper library
import { AppDatePicker } from '../src/components/AppDatePicker'

export default {
  title: "app date picker"
};

export const General= () => (
  <div className="flex flex-1 ">
    <AppDatePicker/> 
  </div>
);
