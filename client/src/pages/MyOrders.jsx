import React, { useContext, useState } from "react";
import { useCartContext } from "../context/cartContext";
import useFetch from "../hooks/useFetch";
import Orders from "../shared/Orders";
import { AuthContext } from "../context/authContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { apiData: orders, error } = useFetch(
    `http://localhost:3000/order/ordersbyid/${user._id}`
  );

  return (
    <div className="pt-14">
      <div className={orders?.length === 0 ? "bg-orange h-96" : "bg-orange"}>
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5  text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">My Orders</h1>
              <h2 className="font-semibold text-2xl">
                {orders?.length || 0} items
              </h2>
            </div>
            <div className="mt-10 flex mb-5 text-black/80">
              <h3 className="font-semibold text- text-sm uppercase w-3/5">
                No. of Items
              </h3>
              <h3 className="font-semibold text-sm uppercase w-2/5">
                Booking Details
              </h3>
              <h3 className="font-semibold text-sm uppercase w-2/5">Status</h3>
              <h3 className="font-semibold  text-sm uppercase w-2/5">
                Total Amount
              </h3>
            </div>

            {orders?.map((item) => {
              return <Orders item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
