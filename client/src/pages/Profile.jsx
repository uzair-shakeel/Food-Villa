import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/register.jpg";
import avatar from "../assets/avatar.png";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, token, dispatch } = useContext(AuthContext);
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    gender: user.gender,
    address: user.address || "",
    salutationPreference: user.salutationPreference,
    profileImage: user.profileImage,
  });

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // setUploading(true);
    try {
      const { data } = await axios.post(
        `http://localhost:3000/images/upload`,
        formData
      );
      // setUploading(false);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // Combine form data with image data
    const userData = {
      ...formData,
      profileImage: image?.url,
    };
    try {
      const response = await fetch(`http://localhost:3000/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
        body: JSON.stringify(userData),
      });
      const { message } = await response.json();

      if (response.ok) {
        // console.log('User registered successfully:', message);
        toast.success(message);
        dispatch({
          type: "LOGOUT",
        });
        navigate("/");
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
        className="text-white mx-auto h-screen flex py-4 justify-center items-center section"
        style={{
          background: ` url('${img}') center / auto 100%  no-repeat`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-slate-800 border my-auto top-8 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 relative"
        >
          <label htmlFor="file-upload" className="custom-file-upload">
            <img
              src={image?.url || user.profileImage || ""}
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative my-4">
              <select
                value={formData.salutationPreference}
                name="salutationPreference"
                onChange={handleChange}
                className="select select-warning w-full min-w-40 text-black block py-2 px-4  outline-none duration-150"
              >
                <option value="" disabled className="">
                  Select Salutation
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
              <label htmlFor=""></label>
            </div>
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
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative my-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="select select-warning w-full min-w-40 text-black block py-2 px-4  outline-none duration-150"
              >
                <option value="" disabled className="">
                  Select Gender
                </option>
                <option value="Mr.">Male</option>
                <option value="Mrs.">Female</option>
              </select>
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
          </div>
          <div>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={formData.address}
              placeholder="Address"
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange "
            />
            <label htmlFor=""></label>
          </div>

          <button
            type="submit"
            className="buttonn bg-orange hover:bg-orangehover my-4  w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
