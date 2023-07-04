import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar Component", () => {
  test("renders the logo link", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logoLink = screen.getByRole("link", { name: /Financial Advisor/ });

    expect(logoLink).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");
    const resourcesLink = screen.getByText("Resources");

    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(resourcesLink).toBeInTheDocument();
  });

  test("toggles the mobile menu correctly", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const menuButton = screen.getByRole("button", { name: "Open Main Menu" });

    fireEvent.click(menuButton);
    let mobileMenuLink = screen.queryAllByTestId("mobile-menu-link");
    expect(mobileMenuLink.length).toBeGreaterThan(0);
  });
});
