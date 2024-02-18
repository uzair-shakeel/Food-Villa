import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/register.jpg";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import BASE_URL from "../utils/config";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/user/Login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message, token, data } = await response.json();
      // const { token } = await response.json();

      if (response.ok) {
        console.log({ token, data });
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: data,
            token: token,
          },
        });

        toast.success(message);
        {
          data.role === "admin" ? navigate("/dashboard") : navigate("/");
        }
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        className="text-white mx-auto h-screen flex py-4 justify-center items-center section"
        style={{
          background: ` url('${img}') center / auto 100%  no-repeat`,
        }}
      >
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-slate-800 top-8 border my-auto border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 relative"
        >
          <h1 className="text-4xl font-cursiveFont md:text-5xl font-bold text-center text-orange lg:text-6xl">
            Login
          </h1>
          <div
            className="
          relative my-4"
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange "
            />
            <label htmlFor=""></label>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange "
            />
            <label htmlFor=""></label>
          </div>
          <div className="py-3">
            <label className=" cursor-pointer">
              <input type="checkbox" /> Remember Me
            </label>
          </div>

          <button type="submit" className="button my-4 w-full">
            Login
          </button>
          <span className="flex pt-4 justify-center gap-2">
            New here?
            <Link
              to={"/register"}
              className="text-orange  hover:text-orangehover"
            >
              Create an Account
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
