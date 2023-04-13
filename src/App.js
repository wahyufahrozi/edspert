import Header from "./components/header";
// import ProductCatalog from "./pages/ProductCatalog";
import Footer from "./components/footer";
// import ProductDetail from "./pages/ProductDetail";
import PaymentInstructions from "./pages/PaymentInstructions";

// import PaymentCheckout from "./pages/PaymentCheckout";

function App() {
  return (
    <div style={{ backgroundColor: "#EFF4FA" }}>
      <Header />
      {/* <ProductCatalog /> */}
      {/* <ProductDetail /> */}
      {/* <PaymentCheckout /> */}
      <PaymentInstructions />
      <Footer />
    </div>
  );
}

export default App;
