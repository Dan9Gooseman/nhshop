import { joiResolver } from "@hookform/resolvers/joi";
import instance from "configs";
import { Iuser } from "interfaces";
import Joi from "joi";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const productSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(4).alphanum().required()
  }).options({
    abortEarly: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iuser>({ resolver: joiResolver(productSchema) });

  const onLogin: SubmitHandler<Iuser> = async (user) => {
    try {
      const {data} = await instance.post("/login", user);
      console.log(data)
      sessionStorage.setItem('data', JSON.stringify(data))
      const info = sessionStorage.getItem('data')
      if(info){
        const {accessToken, user} = JSON.parse(info)
        console.log(accessToken)
        console.log(user)
      }
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <div className="container">
        {/* <h2>&#128511;</h2> */}
        <form className="form" onSubmit={handleSubmit(onLogin)}>
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
            <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container text-center">
        <Link to="/register" className="text-dark text-decoration-none">Register new account</Link>
      </div>
    </>
  );
};

export default Login;
