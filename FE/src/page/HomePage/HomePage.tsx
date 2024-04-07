import { Blog, Galleries, ProductList } from "component/index";
import "../../CSS/home/Home.scss";
import { Banner, Footer, Header, Services } from "../../component/common";
function Home() {
  return (
    <>
      <Header />
      <Banner title={"Home"} />
      <ProductList />
      <Galleries />
      <Blog />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
