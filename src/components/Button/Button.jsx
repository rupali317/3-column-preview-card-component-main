import React from "react";

export const Button = (props) => (
  <button className={props.className} aria-label={"Learn more about " + props.label}>learn more</button>
);
