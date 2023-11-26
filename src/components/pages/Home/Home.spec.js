import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Cards from "../../Cards";
import HeroSection from "../../HeroSection";
import Footer from "../../Footer";

describe("Home page tests", () => {
  it("should render the home page", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  it("HeroSection should render", () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );
    const heroSectionTest = screen.getByTestId("heroSection");
    expect(heroSectionTest).toBeVisible();
  });

  it("Should render cards", () => {
    render(
      <Router>
        <Cards />
      </Router>
    );
    
    const cardsTest = screen.getByTestId("renderCards");
    expect(cardsTest).toBeVisible();
  });

  it("Should render footer", () => {
    render (
      <Router>
        <Footer />
      </Router>
    )
     const footerTest = screen.getByTestId("renderFooter");
     expect(footerTest).toBeVisible();
  });
});
