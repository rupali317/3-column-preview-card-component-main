import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer component", () => {
  test("renders footer texts", () => {
    render(<Footer />);
    const normalText = screen.getByText(/Challenge by \. Coded by \./);
    expect(normalText).toBeInTheDocument();
  });

  test("renders footer links", () => {
    render(<Footer />);
    const frontEndMentorLink = screen.getByRole("link", {
      name: /Frontend Mentor/,
    });
    const authorNameLink = screen.getByRole("link", {
      name: /Rupali Roy Choudhury/,
    });
    expect(frontEndMentorLink).toBeInTheDocument();
    expect(authorNameLink).toBeInTheDocument();
  });

  test("footer links opens up in blank tab", () => {
    render(<Footer />);
    const frontEndMentorLink = screen.getByRole("link", {
      name: /Frontend Mentor/,
    });
    const authorNameLink = screen.getByRole("link", {
      name: /Rupali Roy Choudhury/,
    });
    expect(frontEndMentorLink).toHaveAttribute("target", "_blank");
    expect(authorNameLink).toHaveAttribute("target", "_blank");
  });

  test("footer links open in respective URLs", () => {
    const openInNewTab = (url) => {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.target = "_blank";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    };
    render(<Footer />);
    openInNewTab("https://www.frontendmentor.io/?ref=challenge");
    setTimeout(() => {
      expect(document.body.querySelector("a").href).toBe(
        "https://www.frontendmentor.io/?ref=challenge"
      );
      openInNewTab("https://www.linkedin.com/in/rupali-rc/");
      setTimeout(() => {
        expect(document.body.querySelector("a").href).toBe(
          "https://www.linkedin.com/in/rupali-rc/"
        );
      }, 100);
    }, 100);
  });
});
