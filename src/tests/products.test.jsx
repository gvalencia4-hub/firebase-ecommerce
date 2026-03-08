import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../app/store";
import Products from "../pages/Products";

test("renders products page", () => {
  const queryClient = new QueryClient();

  const { container } = render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Products />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>,
  );

  expect(container).toBeTruthy();
});
