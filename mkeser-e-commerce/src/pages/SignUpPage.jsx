import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/authAction"; // thunk action
import { useHistory } from "react-router-dom";

function SignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory;
  const { loading, error } = useSelector((state) => state.auth); // reducer'daki state

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedRole = watch("role_id");

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: parseInt(data.role_id),
      ...(data.role_id === "2" && {
        store: {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        },
      }),
    };

    dispatch(signUp(payload));
    history.push(-1); // başarılı kayıt sonrası geri git
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            className="border p-2 w-full"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && <span className="text-red-500">Min 3 karakter</span>}
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <span className="text-red-500">Geçerli email girin</span>
          )}
        </div>

        <div>
          <label className="block">Password</label>
          <input
            type="password"
            className="border p-2 w-full"
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*\d).+$/,
            })}
          />
          {errors.password && (
            <span className="text-red-500">
              Şifre en az 8 karakter olmalı ve sayı içermeli
            </span>
          )}
        </div>

        <div>
          <label className="block">Role</label>
          <select
            className="border p-2 w-full"
            {...register("role_id", { required: true })}
          >
            <option value="">Seçiniz</option>
            <option value="1">Customer</option>
            <option value="2">Store Owner</option>
          </select>
        </div>

        {selectedRole === "2" && (
          <>
            <div>
              <label className="block">Store Name</label>
              <input
                className="border p-2 w-full"
                {...register("store_name", { required: true })}
              />
            </div>
            <div>
              <label className="block">Phone</label>
              <input
                className="border p-2 w-full"
                {...register("store_phone", { required: true })}
              />
            </div>
            <div>
              <label className="block">Tax No</label>
              <input
                className="border p-2 w-full"
                {...register("store_tax_no", { required: true })}
              />
            </div>
            <div>
              <label className="block">Bank Account</label>
              <input
                className="border p-2 w-full"
                {...register("store_bank_account", { required: true })}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
