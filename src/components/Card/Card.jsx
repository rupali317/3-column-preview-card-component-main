import React from "react";
import {Button} from "../Button/index.js";

export const Card = (props) => (
  <div>
    <img src={props.src} alt={props.altText} width="64" height="40"></img>
    <h1>{props.title}</h1>
    <p>
      {props.description}
    </p>
    <Button></Button>
  </div>
)
