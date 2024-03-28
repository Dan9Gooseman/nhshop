import Joi from "joi";

export const signUpValidate = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Buộc phải nhập username",
    "string.min": "Username phải có nhiều hơn 3 ký tự",
    "string.max": "Username phải có ít hơn 30 ký tự",
  }),
  email: Joi.string().email().messages({
    "string.email": "Không đúng định dạng email",
    "string.empty": "Email không được bỏ trống",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
    "string.empty": "Mật khẩu không được bỏ trống",
  }),
}).options({
  abortEarly: false,
});

export const signInValidate = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Hãy nhập đúng định dạng email",
    "string.required": "Email không được để trống",
  }),
  password: Joi.string().required().messages({
    "string.required": "Mật khẩu không được để trống",
  }),
}).options({
  abortEarly: false,
});

