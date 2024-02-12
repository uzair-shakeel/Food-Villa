import React, { useContext, useEffect, useState } from "react";
import { useCartContext } from "../context/cartContext";
import useFetch from "../hooks/useFetch";
import Orders from "../shared/Orders";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";

const MyOrders = () => {
  const { user, token } = useContext(AuthContext);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/order/ordersbyid/${user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) {
          console.log("Failed to fetch users");
          toast.error(response.message);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="pt-14">
      <div className={orders?.length === 0 ? "bg-orange h-96" : "bg-orange"}>
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5  text-black rounded-md">
            <div className=" border-b">
              <div className="flex justify-between pb-8">
                <h1 className="font-semibold text-2xl">My Orders</h1>
                <h2 className="font-semibold text-2xl">
                  {orders?.data?.length || 0} items
                </h2>
              </div>
              {user === null && (
                <p className="text-red font-bold pb-2 text-center">
                  Login to see your Orders
                </p>
              )}
            </div>

            <table className="mt-10 w-full mb-5 text-black/80">
              <thead>
                <tr>
                  <th className="font-semibold text-sm uppercase">
                    No. of Items
                  </th>
                  <th className="font-semibold text-center text-sm uppercase">
                    Booking Details
                  </th>
                  <th className="font-semibold text-center text-sm uppercase">
                    Total Amount
                  </th>
                  <th className="font-semibold text-center text-sm uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders?.data?.map((item) => (
                  <Orders item={item} key={item._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
