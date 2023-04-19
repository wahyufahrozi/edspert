import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetail from "./pages/ProductDetail";
import PaymentCheckout from "./pages/PaymentCheckout";
import PaymentInstruction from "./pages/PaymentInstructions";
export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductCatalog />,
      },
      {
        path: "detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <PaymentCheckout />,
      },
      {
        path: "instruction",
        element: <PaymentInstruction />,
      },
    ],
  },
]);

function App() {
  return (
    <div style={{ backgroundColor: "#EFF4FA" }}>
      <RouterProvider router={routerList} />
    </div>
  );
}

export default App;
