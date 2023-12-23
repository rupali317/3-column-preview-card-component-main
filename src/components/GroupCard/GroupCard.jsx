import React from "react";
import { Card } from "../Card";
import { CardData } from "../../cardData.js";

const CardComponents = Object.keys(CardData).map((key) => {
  const data = CardData[key];
  return (
    <Card
      key={key}
      src={data.src}
      altText={data.altText}
      title={data.title}
      description={data.description}
      className={data.className}
    />
  );
});

export const GroupCard = () => (
  <div className="group-card">{CardComponents}</div>
);
