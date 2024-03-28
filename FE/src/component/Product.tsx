
import {useState, useEffect } from "react"
import ProductCard from "./Shop/ProductCard/ProductCard"
import instance from "../configs"
import { TProduct } from "../types/TProduct"

const Product = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    const getALLProduct = async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    getALLProduct()
  }, [])
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
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product