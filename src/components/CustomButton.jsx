import React from "react";
import styles from "./Button.module.css";

const CustomButton = ({ children, ...props }) => (
  <button className={styles.modernButton} {...props}>
    {children}
  </button>
);

export default CustomButton;