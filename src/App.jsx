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
import { Suspense } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ProductTab />
      <Cart />
      <Steps />
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Pricing />
      </Suspense>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
