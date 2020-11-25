import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import App from "../client/App.jsx";

describe("App", () => {
  test("renders App component", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
  });
});
