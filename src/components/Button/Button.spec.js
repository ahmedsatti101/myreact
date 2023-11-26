import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "../HeroSection";

describe("HeroSection functionality", () => {
  it("Functionality should work", () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const buttonClick = screen.getByText("GET STARTED");
    fireEvent.click(buttonClick);
    expect(window.location.pathname).toBe("/sign-up");
  });

  it("Functionality 2 should work", () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const buttonClick = screen.getByText("WATCH TRAILER");
    fireEvent.click(buttonClick);
    expect(window.location.pathname).toBe("/sign-up");
  });
});