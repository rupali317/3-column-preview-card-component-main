import { screen, render } from "@testing-library/react";
import { Card } from "./Card";
import { CardData } from "../../cardData";

describe("Card component", () => {
  const clickButton = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
  };

  Object.entries(CardData).forEach(([key, value]) => {
    test(`Text renders ${key} content`, () => {
      render(<Card key={key} {...value} />);

      const titleElement = screen.getByText(value.title);
      const descriptionElement = screen.getByText(value.description);
      const imageElement = screen.getByAltText(value.altText);
      const buttonElement = screen.getByText(/Learn More/i);
      clickButton(window.location.href + "#main");

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", value.src);
      expect(buttonElement).toBeInTheDocument();
      expect(document.body.querySelector("a").href).toBe(
        window.location.href + "#main"
      );
    });
  });
});
