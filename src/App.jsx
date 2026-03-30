import "./index.css";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Pricing from "./components/pricing/pricing";
import CTA from "./components/cta/cta";
import ProductTab from "./components/product_tab/productTab";
import Steps from "./components/steps/steps";
import Stats from "./components/stats/stats";
import Cart from "./components/cart/cart";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ProductTab />
      <Cart />
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
