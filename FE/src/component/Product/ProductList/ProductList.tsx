import { useState, useEffect } from "react";
import instance from "../../../configs";
import { TProduct } from "../../../types/TProduct";
import { ProductCard } from "..";
import "./ProductList.scss"

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("http://localhost:3000/products");
      setProducts(data)
    })();
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section__heading">
            <h2 className="section__title section__title--typo">Product</h2>
          </div>
          <div className="section__body">
            <div className="product__list">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} /> // Print out bunch of products
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
