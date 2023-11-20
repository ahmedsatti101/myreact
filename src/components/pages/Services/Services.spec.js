import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from "./Services";

describe("Services page tests", () => {
    it("should render the services page", () => {
        render(
            <Router>
                <Routes>
                    <Route exact path="/" element={<Services />} />
                </Routes> 
            </Router>
        );
        const expectedRes = screen.queryByText("SERVICES")
        console.log(expectedRes);

        expect(expectedRes).toBeInTheDocument();  
    });
    // it.todo("should have logo");
    // it.todo("the logo link should work");
    // it.todo("HeroSection background video");
})