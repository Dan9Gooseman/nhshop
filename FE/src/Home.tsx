import "./CSS/home/Home.scss";
import Banner from "./component/common/Banner";
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
      <Banner title={'Home'}/>
      <Product />
      <Blog />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
