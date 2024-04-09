import { joiResolver } from "@hookform/resolvers/joi";
import instance from "configs";
import { Iuser } from "interfaces";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const productSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(4).alphanum().required(),
    role: Joi.string().required(),
  }).options({
    abortEarly: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>({ resolver: joiResolver(productSchema) });

  const onRegister: SubmitHandler<Iuser> = async (user) => {
    try {
      await instance.post("/register", user);
      const isConfirm = confirm(`Registed successfully. Go to login page ?`);
      if (isConfirm) {
        nav("/login");
      }
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <div className="container">
        {/* <h2>&#128511;</h2> */}
        <form className="form" onSubmit={handleSubmit(onRegister)}>
          <div>
            <label className="form-label" htmlFor="name">Username :</label>
            <input className="form-control" type="text" {...register("username")}></input>
            {errors.username ? ( <span className="text-danger">{errors.username.message}</span> ) : ("")}
          </div>
          <div>
            <label className="form-label" htmlFor="name">Email :</label>
            <input className="form-control" type="text" {...register("email")}></input>
            {errors.email ? ( <span className="text-danger">{errors.email.message}</span>) : ("")}
          </div>
          <div>
            <label className="form-label" htmlFor="name">Password :</label>
            <input className="form-control" type="text" {...register("password")}></input>
            {errors.password ? ( <span className="text-danger">{errors.password.message}</span> ) : ("")}
          </div>
          {/* <label className="form-label" htmlFor="name">Re-password :</label>
          <input className="form-control" type="text" {...register("confirmPassword")}></input>
          {errors.confirmPassword ? <span>{errors.confirmPassword.message}</span> : ""} */}
          <div>
            <input
              className="form-control"
              type="password"
              {...register("role")}
              value="user"
              readOnly
              hidden
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
