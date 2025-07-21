import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function SignUpPage() {
  const [roles, setRoles] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const password = watch("password");
  const selectedRole = watch("role_id");

  // Role verilerini çek
  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => setRoles(res.data))
      .catch(() => setRoles([]));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitError("");

    // Yapıyı backend'in istediği formata çevir
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

    try {
      await axiosInstance.post("/signup", payload);
      alert("You need to click link in email to activate your account!");
      history.goBack();
    } catch (err) {
      setSubmitError(
        err.response?.data?.message || "Kayıt sırasında hata oluştu"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm text-purple-950">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border p-2 rounded-sm"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <p className="text-red-500">En az 3 karakter giriniz.</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-purple-950">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border p-2 rounded-sm"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <p className="text-red-500">Geçerli e‑posta giriniz.</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-purple-950">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full border p-2 rounded-sm"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            })}
          />
          {errors.password && (
            <p className="text-red-500">
              Min 8 karakter, büyük, küçük, sayı ve özel karakter gereklidir.
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm text-purple-950">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full border p-2 rounded-sm"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">Şifreler eşleşmiyor.</p>
          )}
        </div>

        {/* Role Seçimi */}
        <div className="mb-4">
          <label className="block text-sm text-purple-950">
            Role <span className="text-red-500">*</span>
          </label>
          <Controller
            name="role_id"
            control={control}
            defaultValue="1"
            rules={{ required: true }}
            render={({ field }) => (
              <select {...field} className="w-full border p-2 rounded-sm">
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.role_id && <p className="text-red-500">Rol seçmelisiniz.</p>}
        </div>

        {/* Store alanları (role_id === "2") */}
        {selectedRole === "2" && (
          <>
            <div className="mb-4">
              <label className="block text-sm text-purple-950">
                Store Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border p-2 rounded-sm"
                {...register("store_name", { required: true, minLength: 3 })}
              />
              {errors.store_name && (
                <p className="text-red-500">En az 3 karakter giriniz.</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm text-purple-950">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border p-2 rounded-sm"
                {...register("store_phone", {
                  required: true,
                  pattern: /^(\+90|0)?5\d{9}$/,
                })}
              />
              {errors.store_phone && (
                <p className="text-red-500">
                  Geçerli Türkiye telefonu giriniz.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm text-purple-950">
                Tax ID <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border p-2 rounded-sm"
                {...register("store_tax_no", {
                  required: true,
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
              {errors.store_tax_no && (
                <p className="text-red-500">
                  “TXXXXVXXXXXX” formatında olmalı.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm text-purple-950">
                Bank Account (IBAN) <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full border p-2 rounded-sm"
                {...register("store_bank_account", {
                  required: true,
                  pattern: /^TR\d{24}$/,
                })}
              />
              {errors.store_bank_account && (
                <p className="text-red-500">Geçerli bir IBAN giriniz.</p>
              )}
            </div>
          </>
        )}

        {submitError && <p className="text-red-600 mb-4">{submitError}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || loading}
          className="flex items-center justify-center w-full h-[35px] bg-blue-600 text-white py-4 rounded disabled:opacity-50"
        >
          {loading && <ClipLoader size={20} color="#fff" />}
          <span className="ml-2">{loading ? "Submitting..." : "Sign Up"}</span>
        </button>
      </form>
    </div>
  );
}
