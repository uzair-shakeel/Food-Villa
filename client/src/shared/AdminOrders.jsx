import React, { useState } from "react";
import { toast } from "react-toastify";

const Orders = ({ item }) => {
  const createdAtDate = new Date(item.createdAt); // Convert the string to a Date object
  const formattedDate = createdAtDate.toDateString(); // Format the Date object to a string in the form "Day Month Date Year"
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const time = createdAtDate.toLocaleTimeString("en-US", options); // Get the time portion as a string

  const handleStatusChange = async (newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/order/orders/${item._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }), // Send the new status in the request body
        }
      );
      const { message } = await response.json();
      console.log(message);
      if (response.ok) {
        toast.success(message);
        setTimeout(() => {
          window.location.reload(); // Reload the page after a slight delay
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server not responding From Client Side");
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center">
          <div className="w-[50px]">
            <img
              src={item?.user?.profileImage}
              className="h-[50px] w-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="ml-4 font-bold text-sm">
            {item?.user?.name} / {item?.user?.email}
          </div>
        </div>
      </td>
      <td className="font-semibold text-sm uppercase">{item?.totalAmount}</td>
      <td className="font-semibold text-sm uppercase">
        {formattedDate} - {time}
      </td>
      <td className="font-semibold text-sm uppercase">{item?.status}</td>
      <td className="font-semibold text-sm uppercase">
        {item?.products?.map((product) => (
          <div key={product._id}>
            {product?.product?.name || product?.name} - {product?.qty}
          </div>
        ))}
      </td>
      <td>
        {item.status === "pending" ? (
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusChange("processing")}
              className="buttonn bg-green-700 text-white w-full"
            >
              Accept
            </button>
            <button
              onClick={() => handleStatusChange("cancelled")}
              className="buttonn bg-red text-white w-full"
            >
              Decline
            </button>
          </div>
        ) : null}
        {item.status === "processing" ? (
          <button
            onClick={() => handleStatusChange("completed")}
            className="buttonn bg-blue-700 w-full text-white"
          >
            Ready?
          </button>
        ) : null}
      </td>
    </tr>
  );
};

export default Orders;