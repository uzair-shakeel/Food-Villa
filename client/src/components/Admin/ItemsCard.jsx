import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";

const ItemsCard = ({ item }) => {
  const { addToCart } = useCartContext();
  const { user, token } = useContext(AuthContext);

  const deleteItem = async () => {
    try {
      const response = await fetch(`${BASE_URL}/food/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
      }
      toast.success(result.message);
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="food-card cursor-default shadow-lg bg-gray/10 rounded-xl flex flex-col items-center overflow-hidden">
      <div className="relative mb-3 w-full">
        <div className="h-[200px] overflow-hidden w-full">
          <img src={item.image} alt="" className="w-full object-cover h-full" />
        </div>

        <div className="absolute top-2 left-2"></div>
        <div className="absolute bottom-2 right-0">
          <button className="h-12 w-24 overflow-hidden shadow-md text-white bg-orange rounded-l-full relative">
            <div className="absolute font-semibold text-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {item.category}
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex w-full px-4 items-center justify-between">
          {user && user.role === "admin" && (
            <Link
              to={`/update/${item._id}`}
              className="text-xl text-center font-bold text-red"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling behavior
                })
              }
            >
              {item.name.length > 15
                ? `${item.name.substring(0, 15)}...`
                : item.name}
            </Link>
          )}

          {user && user.role === "admin" ? null : (
            <Link
              to={`/menu/${item._id}`}
              className="text-xl cursor-pointer text-center font-bold text-red"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling behavior
                })
              }
            >
              {item.name.length > 15
                ? `${item.name.substring(0, 15)}...`
                : item.name}
            </Link>
          )}

          <div className="flex items-center text-sm space-x-2 cursor-pointer">
            <span className="font-normal text-orange">4.5</span>
            <FaStar size={15} className="text-orange" />
            <span className="font-medium">({item?.reviews?.length})</span>
          </div>
        </div>
        <p className="px-4 text-black/70">{item.description}</p>
        <div className="flex justify-between items-center w-full py-3 gap-2 px-2">
          {/* <h2 className="px-4 text-black text-lg text-start font-semibold">
            Rs. <span className="text-3xl"> {item.price}</span>
          </h2> */}
          {user && user.role === "admin" && (
            <Link
              to={`/update/${item._id}`}
              className="buttonn bg-orange w-full text-center hover:bg-orangehover"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling behavior
                })
              }
            >
              Edit Item
            </Link>
          )}
          {user && user.role === "admin" && (
            <button
              className="buttonn bg-red w-full text-center hover:bg-redhover"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Delete
            </button>
          )}

          {user && user.role === "admin" ? null : (
            <Link
              to={`/menu/${item._id}`}
              className="buttonn bg-orange hover:bg-orangehover"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling behavior
                })
              }
            >
              Edit Item
            </Link>
          )}

          {user && user.role === "admin" ? null : (
            <Link
              to={`/menu/${item._id}`}
              className="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scrolling behavior
                })
              }
            >
              View Item
            </Link>
          )}
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-purple-100">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Dear Admin!</h3>
          <p className="py-4 text-center">
            Do you want to delete this item permanently from the menu.
          </p>
          <button
            onClick={deleteItem}
            className="buttonn bg-red hover:text-white hover:bg-redhover mx-auto mt-8 block"
          >
            Delete Permanently
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ItemsCard;
