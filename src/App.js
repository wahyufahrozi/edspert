import Header from "./components/header";
import ProductCatalog from "./pages/ProductCatalog";
import Footer from "./components/footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div style={{ backgroundColor: "#EFF4FA" }}>
      <Header />
      {/* <ProductCatalog /> */}
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default App;
