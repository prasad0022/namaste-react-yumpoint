import { render } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";

const router = createMemoryRouter([{ path: "/", element: <Header /> }]);

describe("Test cases for Login button", () => {
    it("Should render Login button in Header component", () => {
        render(
            <Provider store={appStore}>
                <RouterProvider router={router} />
            </Provider>
        );
    });
});
