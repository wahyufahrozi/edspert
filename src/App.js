import Header from "./components/header";
// import ProductCatalog from "./pages/ProductCatalog";
import Footer from "./components/footer";
import PaymentCheckout from "./pages/PaymentCheckout";
// import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div style={{ backgroundColor: "#EFF4FA" }}>
      <Header />
      {/* <ProductCatalog /> */}
      {/* <ProductDetail /> */}
      <PaymentCheckout />
      <Footer />
    </div>
  );
}

export default App;
