import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  const { user, dispatch, token } = useContext(AuthContext);
  const { totalPrice, itemsLength } = useCartContext();
  const [nav, setNav] = useState(false);
  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cart`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const { message } = await response.json();
          setError(message);
          return;
        }

        const result = await response.json();
        setCartData(result);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching cart data.");
      }
    };

    fetchData();
  }, [cartData]);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    handleNav();
    toast.success("Logged Out");
    navigate("/");
  };
  return (
    <div className="bg-white/70 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
      {user && user.role === "admin" ? null : (
        <div className="userNav py-1 px-10 sm:px-4 md:px-6 lg:px-6 ">
          <div className="container mx-auto flex items-center justify-between ">
            <img
              src={logo}
              alt=""
              className="h-[60px] w-[60px] cursor-pointer"
            />

            <div className="md:flex gap-8 items-center hidden">
              <Link
                to={"/"}
                className="text-lg active:scale-90 duration-100 font-medium text-black hover:text-red-500"
              >
                Home
              </Link>
              <Link
                to={"/menu"}
                className="text-lg font-medium active:scale-90 duration-100 text-black hover:text-red-500"
              >
                Menu
              </Link>
              <Link
                to={"/orders"}
                className="text-lg font-medium text-black active:scale-90 duration-100 hover:text-red-500"
              >
                My Orders
              </Link>
              {user && user.role === "admin" && (
                <Link
                  to={"/add"}
                  className="text-lg font-medium text-black hover:text-red-500"
                >
                  Add Item
                </Link>
              )}

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
                    {user ? (
                      // If user is logged in, show the actual number of items in the cart
                      <span className="badge badge-sm indicator-item">
                        {itemsLength}
                      </span>
                    ) : (
                      // If user is not logged in, show 0
                      <span className="badge badge-sm indicator-item">0</span>
                    )}
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    {user ? (
                      // If user is logged in, show the actual number of items in the cart

                      <span className="badge badge-md font-semibold indicator-item">
                        {itemsLength} Items
                      </span>
                    ) : (
                      // If user is not logged in, show 0
                      <span className="badge badge-md font-semibold indicator-item">
                        0 Item
                      </span>
                    )}
                    {user ? (
                      // If user is logged in, show the actual number of items in the cart
                      <span className="badge badge-lg font-semibold indicator-item text-red">
                        Subtotal: {totalPrice}
                      </span>
                    ) : (
                      // If user is not logged in, show 0
                      <span className="badge badge-lg font-semibold text-red indicator-item">
                        Subtotal: 0
                      </span>
                    )}

                    <div className="card-actions">
                      <Link to={"/cart"} className="button w-full">
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

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
                      <Link
                        to={"/profile"}
                        className="justify-between py-2 px-3"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/orders"}
                        className="justify-between py-2 px-3"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link to={"/cart"} className="justify-between py-2 px-3">
                        My Cart
                      </Link>
                    </li>

                    <li>
                      <button
                        className="buttonn bg-black my-2 hover:bg-black/70"
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

            <div className="flex gap-3 items-center justify-center md:hidden">
              <div className="block md:hidden z-40">
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
                        <span className="badge badge-sm indicator-item">
                          {itemsLength}
                        </span>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">
                          {itemsLength} Items
                        </span>
                        <span className="text-red">Subtotal: {totalPrice}</span>
                        <div className="card-actions">
                          <Link to={"/cart"} className="button w-full">
                            View cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="block md:hidden z-40">
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
                        <Link
                          to={"/profile"}
                          className="justify-between py-2 px-3"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/orders"}
                          className="justify-between py-2 px-3"
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/cart"}
                          className="justify-between py-2 px-3"
                        >
                          My Cart
                        </Link>
                      </li>

                      <li>
                        <button
                          className="buttonn bg-black my-2 hover:bg-black/70"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="block md:hidden z-40" onClick={handleNav}>
                {nav ? (
                  <IoClose size={27} className="cursor-pointer text-red-500" />
                ) : (
                  <TiThMenu size={23} className="cursor-pointer" />
                )}
              </div>
            </div>

            <div
              className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-300 ${
                nav ? "right-0" : "right-[-100%]"
              } pt-40 `}
            >
              <div className="flex gap-8 items-center justify-between flex-col">
                <Link
                  to={"/"}
                  onClick={handleNav}
                  className="text-lg font-medium text-black hover:text-red-500"
                >
                  Home
                </Link>
                <Link
                  to={"/menu"}
                  onClick={handleNav}
                  className="text-lg font-medium text-black hover:text-red-500"
                >
                  Menu
                </Link>
                <Link
                  to={"/orders"}
                  onClick={handleNav}
                  className="text-lg font-medium text-black hover:text-red-500"
                >
                  My Orders
                </Link>
                {user ? (
                  <button
                    className="buttonn bg-black my-2 hover:bg-black/70"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link className="button" to={"/login"}>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {user && user.role === "admin" ? (
        <div className="py-1 px-10 sm:px-4 md:px-6 lg:px-6">
          <div className="container mx-auto flex items-center justify-between ">
            <img
              src={logo}
              alt=""
              className="h-[60px] w-[60px] cursor-pointer"
            />

            <div className="md:flex gap-8 items-center hidden">
              <Link
                to={"/dashboard"}
                className="text-lg active:scale-90 duration-100 font-medium text-black hover:text-red-500"
              >
                Dashboard
              </Link>
              <Link
                to={"/manage-orders"}
                className="text-lg active:scale-90 duration-100 font-medium text-black hover:text-red-500"
              >
                Manage Orders
              </Link>
              <Link
                to={"/manage-users"}
                className="text-lg font-medium active:scale-90 duration-100 text-black hover:text-red-500"
              >
                Manage Users
              </Link>
              <Link
                to={"/manage-items"}
                className="text-lg font-medium text-black active:scale-90 duration-100 hover:text-red-500"
              >
                Manage Items
              </Link>
              {user && user.role === "admin" && (
                <Link
                  to={"/add"}
                  className="text-lg font-medium  active:scale-90 duration-100 text-black hover:text-red-500"
                >
                  Add Item
                </Link>
              )}

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
                    <Link to={"/profile"} className="justify-between py-2 px-3">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/manage-orders"}
                      className="justify-between py-2 px-3"
                    >
                      Manage Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/manage-items"}
                      className="justify-between py-2 px-3"
                    >
                      Manage Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/manage-users"}
                      className="justify-between py-2 px-3"
                    >
                      Manage Users
                    </Link>
                  </li>

                  <li>
                    <button
                      className="buttonn bg-black my-2 hover:bg-black/70"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center md:hidden">
              <div className="block md:hidden z-40">
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
                      <Link
                        to={"/profile"}
                        className="justify-between py-2 px-3"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/orders"}
                        className="justify-between py-2 px-3"
                      >
                        Manage Orders
                      </Link>
                    </li>
                    <li>
                      <Link to={"/cart"} className="justify-between py-2 px-3">
                        Manage Items
                      </Link>
                    </li>

                    <li>
                      <button
                        className="buttonn bg-black my-2 hover:bg-black/70"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block md:hidden z-40" onClick={handleNav}>
                {nav ? (
                  <IoClose size={27} className="cursor-pointer text-red-500" />
                ) : (
                  <TiThMenu size={23} className="cursor-pointer" />
                )}
              </div>
            </div>

            <div
              className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-300 ${
                nav ? "right-0" : "right-[-100%]"
              } pt-40 `}
            >
              <div className="flex gap-8 items-center justify-between flex-col">
                <Link
                  to={"/manage-orders"}
                  onClick={handleNav}
                  className="text-lg active:scale-75 duration-100 font-medium text-black hover:text-red-500"
                >
                  Manage Orders
                </Link>
                <Link
                  to={"/manage-users"}
                  onClick={handleNav}
                  className="text-lg font-medium active:scale-75 duration-100 text-black hover:text-red-500"
                >
                  Manage Users
                </Link>
                <Link
                  to={"/manage-items"}
                  onClick={handleNav}
                  className="text-lg font-medium text-black active:scale-75 duration-100 hover:text-red-500"
                >
                  Manage Items
                </Link>
                {user && user.role === "admin" && (
                  <Link
                    to={"/add"}
                    onClick={handleNav}
                    className="text-lg font-medium text-black hover:text-red-500"
                  >
                    Add Item
                  </Link>
                )}
                {user ? (
                  <button
                    className="buttonn bg-black my-2 hover:bg-black/70"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link className="button" to={"/login"} onClick={handleNav}>
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
