import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";
import CartPage from "../pages/CartPage";

test("renders cart page", () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toBeTruthy();
});
