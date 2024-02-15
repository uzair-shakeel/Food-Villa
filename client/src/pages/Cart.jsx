import React, { useContext, useEffect, useState } from "react";
import { useCartContext } from "../context/cartContext";
import CartFood from "../shared/CartFood";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/config";

const Cart = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { updateTotalPrice, updateItemsLength, totalPrice } = useCartContext();
  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState(null);
  const DeliveryFee = 90;
  const totalAmount = totalPrice + DeliveryFee;
  // console.log(cartData?.data?.items?.quantity);

  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll animation smooth
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/cart`, {
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
        //cart
        updateTotalPrice(result.data.totalPrice);
        updateItemsLength(result.data.items.length);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching cart data.");
      }
    };

    fetchData();
  }, [cartData]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (token === "null" || token === "undefined" || token === "" || !token) {
        navigate("/login");
        toast.error("Please Sign In first");
      } else {
        const products = cartData?.data?.items?.map((item) => ({
          product: item._id,
          name: item.product.name,
          qty: item.quantity,
        }));
        const data = {
          products,
          totalAmount,
          shippingAddress: address,
        };
        const response = await fetch(`${BASE_URL}/order/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        console.log(data);
        const result = await response.json();

        if (response.ok) {
          navigate("/orders");

          toast.success(result.message);
        } else {
          toast.error(result.message);
          console.log(result.error);
        }
      }
    } catch (err) {
      toast.error("Server not responding From Frontend");
    }
  };

  return (
    <div className="pt-14">
      <div
        className={
          cartData?.data?.items?.length === 0 ? "bg-orange h-96" : "bg-orange"
        }
      >
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5 text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
                My Food Cart
              </h1>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                {cartData?.data?.items?.length || 0} items
              </h2>
            </div>
            <div className="mt-10">
              <table className="w-full">
                <thead>
                  <tr className="text-sm w-full px-6 uppercase font-semibold text-left">
                    <th>Item Name</th>
                    <th className=" text-center">Quantity</th>
                    <th className="hidden md:table-cell text-center">
                      Category
                    </th>
                    <th className="text-center hidden md:table-cell">Price</th>
                    <th className="text-center">Total Amount</th>
                    <th className="hidden md:table-cell text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.data?.items?.map((item) => (
                    <CartFood item={item} key={item._id} />
                  ))}
                </tbody>
              </table>
              {user && cartData && (
                <div
                  className={
                    cartData?.data?.items?.length === 0
                      ? "mx-auto hidden items-end justify-center px-6 flex-col"
                      : "mx-auto justify-end items-end px-6 mt-6 flex-col"
                  }
                >
                  <div className="text-right mb-2 font-semibold text-redhover">
                    Price: {cartData?.data?.totalPrice}
                  </div>
                  <div className="text-right mb-2 font-semibold text-redhover">
                    Delivery: {DeliveryFee}
                  </div>
                  <div className="text-right mb-2 font-bold text-redhover">
                    Total Price: {totalAmount}
                  </div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="hidden md:block button text-center w-full"
                  >
                    Proceed to Check Out
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="md:hidden button text-center w-full"
                  >
                    Check Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-lg">CheckOut!</h3>
          <p className="py-4 text-center">
            Thank you for shopping with us! Please review your order details
            below and proceed to checkout.
          </p>
          <h4 className="text-center text-sm font-semibold">
            Total Amount:{" "}
            <span className="text-red text-lg">Rs. {totalPrice}/-</span>
          </h4>
          {/* Shipping Address */}
          <div className="mb-4">
            <label
              htmlFor="shippingAddress"
              className="block text-sm font-medium my-3 text-gray-700"
            >
              Shipping Address
            </label>
            <textarea
              id="shippingAddress"
              name="shippingAddress"
              rows="2"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your shipping address"
              value={address} // Bind the value of the textarea to the state
              onChange={handleAddressChange} // Call handleAddressChange on change
              required
            ></textarea>
          </div>
          {/* Payment Method Selection */}
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
              <option disabled value="credit_card">
                Credit Card
              </option>
              <option disabled value="credit_card">
                EasyPaisa
              </option>
              <option disabled value="credit_card">
                JazzCash
              </option>
            </select>
          </div>

          {/* Proceed to Checkout Button */}
          <button className="button" onClick={handleSubmit}>
            Confirm Order
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
