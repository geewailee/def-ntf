import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../client/App.jsx";

describe("App", () => {
  test("Tests Registration Tab", () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/What Is My Purpose/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/registration/i));
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});
