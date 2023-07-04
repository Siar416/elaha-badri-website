import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../App";

describe("App Component", () => {
  test("check to see if App Component gets rendered", () => {
    render(<App />);
  });

  test("navbar component being rendered", () => {
    const navbarElement = screen.findByRole("navigation");
    expect(navbarElement).toBeDefined();
  });
});
