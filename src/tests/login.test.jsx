import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

test("renders login page", () => {
  const { container } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  expect(container).toBeTruthy();
});
