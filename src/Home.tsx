import "./CSS/home/Home.scss";
import Banner from "./Contact";
import Blog from "./component/Blog";
import Product from "./component/Product";
import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import Services from "./component/common/Services";
//datlt2306/nhshop-react
function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Product />
      <Blog />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
