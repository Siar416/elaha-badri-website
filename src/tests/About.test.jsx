import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, navigate } from "vitest";
import About from "../components/About/About";
import { BrowserRouter } from "react-router-dom";
import client from "../assets/images/elaha-favicon.jpg";

describe("About Component", () => {
  test("client image being rendered", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const image = screen.getByAltText("client");
    const imageUrl = client;

    expect(image).toBeInTheDocument();
    expect(image.src).toContain(imageUrl);
  });

  test("background image being rendered", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const backgroundImage = screen.getByLabelText("background");
    expect(backgroundImage).toBeInTheDocument();
  });

  test("get in touch button", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const ctaButton = screen.getByRole("button", { name: "Get in Touch" });
    expect(ctaButton).toBeInTheDocument();
  });

  test("clicking Get in Touch button takes to /contact route", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const getInTouchButton = screen.getByText("Get in Touch");
    fireEvent.click(getInTouchButton);

    expect(window.location.pathname).toBe("/contact");
  });
});
