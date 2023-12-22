import React from "react";
import {Button} from "../Button/index.js";

export const Card = (props) => (
  <section className={props.className}>
    <article>
      <img src={props.src} alt={props.altText} width="64" height="40"></img>
      <h1 aria-label={"Heading for " + props.title}>{props.title}</h1>
      <p aria-label={"Description for " + props.title}>
        {props.description}
      </p>
    </article>
    <Button className={props.buttonClassName} label={props.title}></Button>
  </section>
)
