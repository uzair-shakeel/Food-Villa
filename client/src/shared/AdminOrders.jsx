import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaStopwatch, FaCheckCircle, FaCheck } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { PiCookingPotFill, PiCookingPot } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import BASE_URL from "../utils/config";

const Orders = ({ item }) => {
  const createdAtDate = new Date(item.createdAt); // Convert the string to a Date object
  const formattedDate = createdAtDate.toDateString(); // Format the Date object to a string in the form "Day Month Date Year"
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const time = createdAtDate.toLocaleTimeString("en-US", options); // Get the time portion as a string

  const handleStatusChange = async (newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/order/orders/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }), // Send the new status in the request body
      });
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
      <td className="py-3 px-6 border-b text-center   text-sm uppercase table-cell">
        <div className="flex items-center">
          <div className="w-[50px]">
            <img
              src={item?.user?.profileImage}
              className="h-[50px] w-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="ml-4 text-sm">
            {item?.user?.name} / {item?.user?.email}
          </div>
        </div>
      </td>
      <td className="py-3 px-2 md:px-6 border-b text-center text-xs md:text-sm uppercase ">
        {item?.products?.map((product) => (
          <div key={product._id}>
            {product?.product?.name || product?.name} - {product?.qty}
          </div>
        ))}
      </td>
      <td className="hidden md:table-cell py-3 px-2 md:px-6 border-b text-center  text-sm uppercase ">
        {item?.status === "pending" && (
          <h4 className="font-semibold bg-blue-200 py-2 px-4 rounded-md text-blue-700 text-sm uppercase">
            {item?.status}
          </h4>
        )}
        {item?.status === "processing" && (
          <h4 className="font-semibold bg-[#5F6F52]/20 py-2 px-4 rounded-md text-[#5F6F52] text-sm uppercase">
            {item?.status}
          </h4>
        )}
        {item?.status === "completed" && (
          <h4 className="font-semibold bg-green-200 py-2 px-4 rounded-md text-green-700 text-sm uppercase">
            {item?.status}
          </h4>
        )}
        {item?.status === "cancelled" && (
          <h4 className="font-semibold bg-red/20 py-2 px-4 rounded-md text-redhover text-sm uppercase">
            {item?.status}
          </h4>
        )}
      </td>
      <td className="py-3 px-6 border-b text-center text-xs table-cell md:hidden">
        {item.status === "pending" && (
          <FaStopwatch size={17} className="text-blue-700" />
        )}
        {item.status === "processing" && (
          <PiCookingPotFill size={17} className="text-[#5F6F52]" />
        )}
        {item.status === "completed" && (
          <FaCheckCircle size={17} className="text-green-700" />
        )}
        {item.status === "cancelled" && (
          <MdCancel size={17} className="text-redhover" />
        )}
      </td>
      <td className="py-3 px-2 md:px-6 border-b text-center text-xs md:text-sm uppercase ">
        {item?.totalAmount}
      </td>
      <td className="py-3 px-2 md:px-6 border-b text-center text-xs md:text-sm uppercase hidden md:table-cell ">
        {formattedDate} - {time}
      </td>

      {/* <td className="py-3 px-6 border-b text-center">{item?.status}</td> */}

      <td className="py-3 px-2 md:px-6 border-b text-center hidden lg:table-cell">
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

      <td className="py-3 px-2 md:px-6 border-b text-center table-cell lg:hidden">
        {item.status === "pending" ? (
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusChange("processing")}
              className="rounded-md px-2 py-2 hover:rounded-lg bg-green-700 text-white w-full"
            >
              <FaCheck size={14} />
            </button>
            <button
              onClick={() => handleStatusChange("cancelled")}
              className="rounded-md px-2 py-2 hover:rounded-lg bg-red text-white w-full"
            >
              <TiCancel size={17} />
            </button>
          </div>
        ) : null}
        {item.status === "processing" ? (
          <button
            onClick={() => handleStatusChange("completed")}
            className="buttonn bg-blue-700 w-full text-white"
          >
            <PiCookingPot size={17} />
          </button>
        ) : null}
      </td>
    </tr>
  );
};

export default Orders;
