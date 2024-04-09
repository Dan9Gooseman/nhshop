import Iproduct from "interfaces/Iproduct";
// import React from "react";
import { Link } from "react-router-dom";

type Props = {
  products: Iproduct[];
  onDel: (id: number) => void;
};

const Admin = ({ onDel, products }: Props) => {
  return (
    <>
      <h1>Welcome to admin, {}</h1>
      <Link className="btn btn-primary" to="/admin/add">
        Add product
      </Link>
      <table className="table table-bordered border-black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Original Price</th>
            <th>Discount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price_old}</td>
              <td>{item.discount}%</td>
              <td>{item.description}</td>
              <td>
                <Link className="btn btn-warning" to={`/admin/${item.id}/edit`}>
                  Edit
                </Link>
                <button
                  onClick={() => {
                    onDel(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
