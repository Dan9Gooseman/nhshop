import { joiResolver } from "@hookform/resolvers/joi";
import Iproduct from "interfaces/Iproduct";
import Joi from "joi";
import { useForm } from "react-hook-form";

type Props = {
  onAdd: (product: Iproduct) => void;
};

const ProductAdd = ({ onAdd }: Props) => {
  const productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price_old: Joi.number().min(0).required(),
    discount: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
  }).options({
    abortEarly: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iproduct>({ resolver: joiResolver(productSchema) });

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onAdd)}>
        <label className="form-label" htmlFor="name">Name :</label>
          <input className="form-control" type="text" {...register("name")} ></input>
          {errors.name ? <span className="text-danger">{errors.name.message}</span> : ""}
        <label className="form-label" htmlFor="image">Image :</label>
          <input className="form-control" type="text" {...register("image")} readOnly value="https://picsum.photos/300/300"></input>
          {errors.image ? <span className="text-danger">{errors.image.message}</span> : ""}
        <label className="form-label" htmlFor="price_old">Original price ($) :</label>
          <input className="form-control" type="number" {...register("price_old")}></input>
          {errors.price_old ? <span className="text-danger">{errors.price_old.message}</span> : ""}
        <label className="form-label" htmlFor="discount">Discount amount (%) :</label>
          <input className="form-control" type="number" {...register("discount")}></input>
          {errors.discount ? <span className="text-danger">{errors.discount.message}</span> : ""}
        <label className="form-label" htmlFor="description">Description :</label>
          <input className="form-control" type="text" {...register("description")}></input>
          {errors.description ? <span className="text-danger">{errors.description.message}</span> : ""}
        <label className="form-label" htmlFor="category">
          Category : </label>
          <input className="form-control" type="text" {...register("category")} value="Sofa"></input>
          {errors.category ? <span className="text-danger">{errors.category.message}</span> : ""}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ProductAdd;
