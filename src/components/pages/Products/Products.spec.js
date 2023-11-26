import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from '../Products/Products';
import Footer from "../../Footer";

describe("Products page tests", () => {
  it("Render products page", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </Router>
    );
    const pageText = screen.getByText("PRODUCTS");
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
