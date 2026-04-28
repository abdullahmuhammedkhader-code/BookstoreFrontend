import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { googleLoginAPI, loginAPI, registerAPI } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Auth({ insideRegister }) {
  const [togglePasswordType, setTogglePasswordType] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "demo",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .required("Username Required"),
      email: Yup.string().email("Invalid email").required("Email Required"),
      password: Yup.string().required("Password Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (insideRegister) {
        console.log("register api call");
        handleRegister(values);
      } else {
        handleLogin(values);
      }
      resetForm();
    },
  });

  const handleRegister = async (userData) => {
    const result = await registerAPI(userData);
    console.log(result);
    if (result.status == 201) {
      toast.success("Registration Successfull.... Please Login");
    } else {
      toast.error(result.response);
    }
    navigate("/login");
  };

  const handleLogin = async (userData) => {
    const result = await loginAPI(userData);
    console.log(result);
    if (result.status == 200) {
      toast.success("Login Successfull...");
      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2500);
    } else {
      toast.error(result.response);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Inside handleGoogleLogin", credentialResponse);
    const { email, name, picture } = jwtDecode(credentialResponse.credential);
    console.log(email, name, picture);

    const result = await googleLoginAPI({
      username: name,
      email,
      password: "googlePassword",
      picture,
    });
    if (result.status == 200) {
      toast.success("Login Successfull...");
      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("user", JSON.stringify(result.data.user));
      setTimeout(() => {
        if (result.data.user.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2500);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[url(/background.png)] bg-cover bg-center text-white">
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOK STORE</h1>
        <div
          style={{ width: "400px" }}
          className="bg-black text-white p-5 flex justify-center items-center flex-col my-5 rounded-xl"
        >
          <div
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            className="border mb-5 flex justify-center items-center"
          >
            <FaUser className="text-3xl" />
          </div>
          <h1 className="text-2xl">{insideRegister ? "Register" : "Login"}</h1>
          <form onSubmit={formik.handleSubmit} className="my-5 w-full">
            {insideRegister && (
              <>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className="bg-white p-2 w-full rounded my-3 text-black"
                  type="text"
                  placeholder="Username"
                />
                <div className="mb-2 text-yellow-600 text-sm">
                  {formik.errors.username}
                </div>
              </>
            )}
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="bg-white p-2 w-full rounded my-3 text-black"
              type="text"
              placeholder="Email"
            />
            <div className="mb-2 text-yellow-600 text-sm">
              {formik.errors.email}
            </div>
            <div className="flex items-center">
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="bg-white p-2 w-full rounded my-3 text-black"
                type={togglePasswordType ? "text" : "password"}
                placeholder="Password"
              />
              {togglePasswordType ? (
                <FaEyeSlash
                  onClick={() => setTogglePasswordType(!togglePasswordType)}
                  style={{ marginLeft: "-30px" }}
                  className="text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setTogglePasswordType(!togglePasswordType)}
                  style={{ marginLeft: "-30px" }}
                  className="text-gray-500 cursor-pointer"
                />
              )}
            </div>
            <div className="mb-2 text-yellow-600 text-sm">
              {formik.errors.password}
            </div>
            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-300">
                Never Share Your Password With Others
              </p>
              {!insideRegister && (
                <button className="text-xs underline">Forgot Password</button>
              )}
            </div>
            <div className="text-center">
              {insideRegister ? (
                <button
                  type="submit"
                  className="bg-green-600 p-2 w-full rounded"
                >
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 p-2 w-full rounded"
                >
                  Login
                </button>
              )}
            </div>
            {!insideRegister && (
              <div className="my-5 text-center">
                <p>--------------------or --------------------</p>
                <div className="mt-2 flex justify-center items-center w-full">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      handleGoogleLogin(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </div>
            )}
            <div className="mt-5 text-center">
              {insideRegister ? (
                <p className="text-blue-500">
                  {" "}
                  Existing User ?
                  <Link to={"/login"} className="underline ms-5">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
              ) : (
                <p className="text-blue-500">
                  New User ?
                  <Link to={"/register"} className="underline ms-5">
                    {" "}
                    Register
                  </Link>{" "}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default Auth;