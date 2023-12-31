import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { GroupCard } from "./GroupCard";

// Add the custom matcher to Jest
expect.extend(toHaveNoViolations);

describe("Group Card component", () => {
  test("renders without crashing", () => {
    render(<GroupCard />);
    const groupCardElement = document.querySelector(".group-card");
    expect(groupCardElement).toBeInTheDocument();
  });

  test("is accessible", async () => {
    const { container } = render(<GroupCard />);

    // Run accessibility tests
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
