import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavForm from "./NavForm.js";
import React from "react";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({})
}))

describe(NavForm, () => {
  it("should render the NavForm component", () => {
    render(<NavForm />);
    const navFormElement = screen.queryByTestId("navForm");
    expect(navFormElement).toBeInTheDocument();
  });

  it("should render three input elements", () => {
    render(<NavForm />);
    const fNameInput = screen.queryByPlaceholderText("First name");
    const lNameInput = screen.queryByPlaceholderText("Last name");
    const partcInput = screen.queryByPlaceholderText("Participation");
    expect(fNameInput).toBeInTheDocument();
    expect(lNameInput).toBeInTheDocument();
    expect(partcInput).toBeInTheDocument();
  });

});
