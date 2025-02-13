import { render, screen } from "@testing-library/react";
import About from "../components/About";
import "@testing-library/jest-dom";

test("Should load heading in About component", () => {
    // Render:
    render(<About />);

    // Querying:
    const heading = screen.getByText("About Us");

    // Assertion:
    expect(heading).toBeInTheDocument();
});

test("Should load 13 paragraph element in About component", () => {
    render(<About />);
    const paraList = screen.getAllByRole("paragraph");
    expect(paraList.length).toBe(13);
});