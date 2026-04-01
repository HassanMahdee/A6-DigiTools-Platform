import "./index.css";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Pricing from "./components/pricing/pricing";
import CTA from "./components/cta/cta";
import ProductTab from "./components/main_section/productTab";
import Steps from "./components/steps/steps";
import Stats from "./components/stats/stats";
import Cart from "./components/main_section/cart/cart";
import { Suspense, useState } from "react";

const fetchProductList = async () => {
  const res = await fetch("/data/productList.json");
  return res.json();
};
const productListPromise = fetchProductList();

function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setActiveTab={setActiveTab} />
      <Banner setActiveTab={setActiveTab} />
      <Stats />
      <Suspense
        fallback={
          <span className="loading loading-bars loading-xl w-full mx-auto"></span>
        }
      >
        <ProductTab
          productPromise={productListPromise}
          cart={cart}
          setCart={setCart}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Suspense>
      <Steps />
      <Suspense
        fallback={
          <span className="loading loading-bars loading-xl w-full mx-auto"></span>
        }
      >
        <Pricing />
      </Suspense>
      <CTA setActiveTab={setActiveTab} />
      <Footer />
    </>
  );
}

export default App;
