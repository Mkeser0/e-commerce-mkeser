import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/actions/authAction"; // thunk çağrısı

function SignIn() {
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(loginUserThunk(data, history, setError));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email input */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      {/* Password input */}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      {/* Remember me */}
      <label>
        <input type="checkbox" {...register("remember")} />
        Remember me
      </label>

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
