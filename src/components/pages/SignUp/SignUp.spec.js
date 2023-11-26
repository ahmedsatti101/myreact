import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../../Footer";
import SignUp from "../SignUp/SignUp";

describe("Products page tests", () => {
  it("Render sign-up page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    );
    const pageText = screen.getByText("LIKE & SUBSCRIBE");
    expect(pageText).toBeVisible();
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