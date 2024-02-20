import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/register.jpg";
import avatar from "../assets/avatar.png";
import { toast } from "react-toastify";
import BASE_URL from "../utils/config";

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    role: "user",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    // You can perform any additional logic here if needed
    // For example, checking file size or type

    // Once you've handled any necessary logic, you can call the function to upload the image
    uploadImage(file);
  };

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        body: formData,
      });

      console.log(response);
      const data = await response.json();
      console.log("====>", data);
      setImage({
        url: data.url,
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // Combine form data with image data
    const userData = {
      ...formData,
      profileImage: image.url || "",
    };

    try {
      const response = await fetch(`${BASE_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const { message } = await response.json();

      if (response.ok) {
        // console.log('User registered successfully:', message);
        toast.success(message);
        navigate("/login");
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  const handleChange = (e) => {
    // Update form data as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        className="text-white mx-auto min-h-screen flex py-4 justify-center items-center section"
        style={{
          background: ` url('${img}') center / auto 100%  no-repeat`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-slate-800 border my-auto lg:my-14 top-8 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 relative"
        >
          <label htmlFor="file-upload" className="custom-file-upload">
            <img
              src={image?.url || avatar}
              alt=""
              className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer"
            />
          </label>
          <input
            type="file"
            label="image"
            name="myFile"
            id="file-upload"
            className="hidden"
            accept="jpeg png jpg"
            onChange={handleImage}
          />
          <div className="relative my-4">
            <input
              type="text"
              placeholder="Full Name"
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
          </div>
          <div className="relative my-4">
            <input
              type="email"
              placeholder="Email"
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              placeholder="Password"
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
          </div>
          <div>
            <input
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
              value={formData.passwordConfirm}
              placeholder="Confirm Password"
              className="block w-72 py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange "
            />
            <label htmlFor=""></label>
          </div>

          <button type="submit" className="button my-4  w-full">
            Register
          </button>
          <span className="flex justify-center gap-2">
            Already have an Account?
            <Link to={"/login"} className="text-orange hover:text-orangehover">
              Sign in here
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Register;
