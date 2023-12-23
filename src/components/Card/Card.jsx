import React from "react";

export const Card = (props) => (
  <section className={props.className}>
    <article>
      <img src={props.src} alt={props.altText} width="64" height="40"></img>
      <h1 aria-label={"Heading for " + props.title}>{props.title}</h1>
      <p>{props.description}</p>
    </article>
    <a role="button" aria-label={"Learn more about " + props.label} href="#main">
      learn more
    </a>
  </section>
);
