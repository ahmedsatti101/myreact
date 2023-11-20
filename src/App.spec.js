import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import routesConfig from "./routes/routesConfig"
import userEvent from '@testing-library/user-event';

describe("Pages links", () => {
    it("Services page", async() => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ["/services"] });
        render(<RouterProvider router={router} />)
        // eslint-disable-next-line testing-library/prefer-find-by, no-restricted-globals
        const res = await waitFor(() => screen.getByText(/SERVICES/));
        expect(res).toHaveTextContent("SERVICES");
    });
    it("Not found page", async() => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ["/support"] });
        render(<RouterProvider router={router} />)
        // eslint-disable-next-line testing-library/prefer-find-by, no-restricted-globals
        const res = await waitFor(() => screen.getByText(/Page Not Found/));
        expect(res).toHaveTextContent("Page Not Found");
    });
});
describe("Navigate to pages", () => {
    it("Services page", async() => {
        const router = createMemoryRouter(routesConfig, { initialEntries: ["/"] });
        render(<RouterProvider router={router} />)
        await userEvent.click(screen.getByText(/Services/));
        // eslint-disable-next-line testing-library/prefer-find-by, no-restricted-globals
        const res = await waitFor(() => screen.getByText(/SERVICES/));
        console.log(res)
        expect(res).toHaveTextContent("SERVICES");
    });
})