import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Resources from "../components/Resources/Resources";
import { BrowserRouter } from "react-router-dom";

describe("Resources Component", () => {
  test("coming soon text is rendering", () => {
    render(
      <BrowserRouter>
        <Resources />
      </BrowserRouter>
    );

    const comingSoonText = screen.getByText("Coming soon!");
    expect(comingSoonText).toBeVisible();
  });
});
