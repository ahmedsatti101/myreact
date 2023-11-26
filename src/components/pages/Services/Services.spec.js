import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
import Footer from "../../Footer";

describe("Services page tests", () => {
  it("should render the services page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Services />} />
        </Routes>
      </Router>
    );
    const expectedRes = screen.getByText("SERVICES");
    expect(expectedRes).toBeVisible();
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
