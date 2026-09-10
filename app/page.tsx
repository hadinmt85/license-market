import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Offers from "./components/Offers";
import SupportButton from "./components/SupportButton";
import Services from "./components/Services";
import Product from "./components/Product";
import CategoryA from "./components/CategoryA";
import CategoryB from "./components/CategoryB";
import SpecialServices from "./components/SpecialServices";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />
      <Offers />
      <SupportButton />
      <Services />
      <Product />
      <CategoryA />
      <CategoryB />
      <SpecialServices />
      <Blog />
      <Footer />
    </div>
  );
}