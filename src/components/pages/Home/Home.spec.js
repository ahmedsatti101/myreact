import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";

describe("Home page tests", () => {
    it("should render the home page", () => {
        render(
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes> 
            </Router>
        );
        const expectedRes = screen.queryByText("ADVENTURE AWAITS")
        console.log(expectedRes);

        expect(expectedRes).toBeInTheDocument();  
    });
    // it.todo("should have logo");
    // it.todo("the logo link should work");
    // it.todo("HeroSection background video");
})