import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    toast.success("Logged Out");
    navigate("/");
  };
  return (
    <div className="bg-white/70 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
      <div className="py-1 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto flex items-center justify-between ">
          <img src={logo} alt="" className="h-[60px] w-[60px] cursor-pointer" />

          <div className="md:flex gap-8 items-center hidden">
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-red-500"
            >
              Specials
            </a>
            <a
              href="#"
              className="text-lg font-medium text-black hover:text-red-500"
            >
              About Us
            </a>
            <Link
              to={"/menu"}
              className="text-lg font-medium text-black hover:text-red-500"
            >
              Menu
            </Link>
            <Link
              to={"/add"}
              className="text-lg font-medium text-black hover:text-red-500"
            >
              Add Item
            </Link>
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.profileImage}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      className="buttonn bg-black hover:bg-black/70"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {user ? null : (
              <Link to={"/login"} className="button">
                Login
              </Link>
            )}
          </div>

          <div className="block md:hidden z-40" onClick={handleNav}>
            {nav ? (
              <IoClose size={27} className="cursor-pointer text-red-500" />
            ) : (
              <TiThMenu size={23} className="cursor-pointer" />
            )}
          </div>

          <div
            className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/70 top-0 duration-500 ${
              nav ? "right-0" : "right-[-100%]"
            } mt-24 `}
          >
            <div className="flex gap-8 items-center justify-between flex-col">
              <a
                href="#"
                className="text-md font-medium text-black hover:text-red-500"
              >
                Specials
              </a>
              <a
                href="#"
                className="text-lg font-medium text-black hover:text-red-500"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-lg font-medium text-black hover:text-red-500"
              >
                Menu
              </a>
              <a
                href="#"
                className="text-lg font-medium text-black hover:text-red-500"
              >
                Top Rated
              </a>

              <button className="btn">Login</button>
              {/* <Link
              to={"/"}
              className="text-xl font-medium text-black hover:text-red-700"
            >
              Specials
            </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
  
  </div>
</div>; */
}
