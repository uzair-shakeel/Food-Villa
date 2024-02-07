import React from "react";
import { FaStopwatch, FaCheckCircle } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

const Orders = ({ item }) => {
  // Assuming {item.createdAt} is a string representing a date
  const createdAtDate = new Date(item.createdAt); // Convert the string to a Date object
  const formattedDate = createdAtDate.toDateString(); // Format the Date object to a string in the form "Day Month Date Year"
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const time = createdAtDate.toLocaleTimeString("en-US", options); // Get the time portion as a string

  return (
    <div className="py-3 flex items-center px-6 -mx-8 ">
      <div className="flex w-3/5">
        {/* <div className="w-20">
          <img
            src={item.image}
            alt=""
            className="h-[50px] w-full object-cover rounded-md"
          />
        </div> */}
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <div className="font-bold text-sm">{item.products.length}</div>
        </div>
      </div>

      <h4
        className="
      font-semibold text- text-sm uppercase w-2/5"
      >
        {formattedDate} - {time}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.status}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.totalAmount}
      </h4>
      <span>
        {item.status === "pending" && (
          <FaStopwatch size={25} className="text-blue-700" />
        )}
      </span>
      <span>
        {item.status === "processing" && (
          <PiCookingPotFill size={25} className="text-[#5F6F52]" />
        )}
      </span>
      <span>
        {item.status === "completed" && (
          <FaCheckCircle size={25} className="text-green-700" />
        )}
      </span>
      <span>
        {item.status === "cancelled" && (
          <MdCancel size={28} className="text-redhover" />
        )}
      </span>
    </div>
  );
};

export default Orders;
