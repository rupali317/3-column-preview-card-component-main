import React from "react";
import { Card } from "../Card/index.js";
//import { CarData } from "../../carData.js";

export const GroupCard = () => (
  <div>
    <Card
      src="/images/icon-sedans.svg"
      altText="Logo for sedans"
      title="Sedans"
      description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      className="card card--sedan card__left-border-radius--soft card__top-border-radius--soft" 
      buttonClassName="card__button--sedan"
    />
    <Card
      src="/images/icon-suvs.svg"
      altText="Logo for SUVs"
      title="SUVs"
      description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      className="card card--suvs"
      buttonClassName="card__button--suv"
    />
    <Card
      src="/images/icon-luxury.svg"
      altText="Logo for luxury"
      title="Luxury"
      description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      className="card card--luxury card__right-border-radius--soft card__bottom-border-radius--soft"
      buttonClassName="card__button--luxury"
    />
  </div>
);
