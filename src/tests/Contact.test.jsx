import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect, vitest } from "vitest";
import Contact from "../components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";

describe("Contact Component", () => {
  test("check to see if Contact component renders", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
  });

  test("background image being rendered", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const backgroundImage = screen.getByLabelText("background");
    expect(backgroundImage).toBeInTheDocument();
  });

  test("get in touch text being rendered", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const getInTouchText = screen.getByText("Get in Touch");
    expect(getInTouchText).toBeInTheDocument();
  });

  test("check to see if form being rendered", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const formElement = screen.getByTestId("form");
    expect(formElement).toBeVisible();
  });
});
