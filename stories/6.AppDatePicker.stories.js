import React from "react";
// import styles from "./colors.module.scss";
// import cx from "classnames"; // Optional classname helper library
import { AppDatePicker, AppDatePickerMonthSelector, DateText} from "../src/components/AppDatePicker";
import moment from "moment";

export default {
  title: "App date picker"
};

export const General = () => (
  <div className="flex flex-1 ">
    <AppDatePicker/>
  </div>
);

export const Text = () => <DateText date={moment()}  onClick={()=>{}}/>;

export const TextActive = () => <DateText date={moment()} isActive={true}  onClick={()=>{}}/>;

export const MonthSelector= () => <AppDatePickerMonthSelector date={moment()} minDate={moment()}/>;
