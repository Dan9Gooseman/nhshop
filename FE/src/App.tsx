import { Admin } from "Admin";
import ProductAdd from "Admin/pages/ProductAdd/ProductAdd";
import ProductEdit from "Admin/pages/ProductEdit/ProductEdit";
import instance from "configs";
import Iproduct from "interfaces/Iproduct";
import { Home } from "page";
import Login from "page/Login/Login";
import Register from "page/Register/Register";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  //get user session after login
  
  //products and CRUD
  const [products, setProducts] = useState<Iproduct[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("products");
      // console.log(data);
      setProducts(data);
    })();
  }, []);

  const handleDel = async (id: number) => {
    const isConfirm = confirm("sure to delete ?");
    if (isConfirm) {
      const data = await instance.delete(`/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
      alert(data.statusText);
    }
  };
  const handleEdit = async (product: Iproduct) => {
    (async () => {
      const data = await instance.put(`/products/${product.id}`, product);
      setProducts(
        products?.map((item) => (item.id === data.data.id ? data.data : item))
      );
      alert(data.statusText);
      nav("/admin");
    })();
  };

  const handleAdd = async (product: Iproduct) => {
    const data = await instance.post(`/products`, product);
    setProducts([...products, data.data]);
    alert(data.statusText);
    nav("/admin");
  };
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/admin">
        <Route
          path=""
          element={<Admin products={products} onDel={handleDel} />}
        />
        <Route path=":id/edit" element={<ProductEdit onEdit={handleEdit} />} />
        <Route path="add" element={<ProductAdd onAdd={handleAdd} />} />
      </Route>
    </Routes>
  );
};

export default App;
