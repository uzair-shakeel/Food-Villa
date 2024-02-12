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
    <tr>
      <td className="py-3 px-6 border-b text-center">
        <div className="font-semibold text-sm">
          <div className="font-bold  text-sm">{item.products.length}</div>
        </div>
      </td>

      <td className="py-3 px-6 border-b text-center hidden md:table-cell">
        <h4 className="font-semibold text-sm">
          {formattedDate} - {time}
        </h4>
      </td>

      <td className="py-3 px-6 border-b text-center">
        <h4 className="font-semibold text-sm">{item.totalAmount}</h4>
      </td>

      <td className="py-3 px-6 border-b text-center">
        {item.status === "pending" && (
          <h4 className="font-semibold bg-blue-200 py-2 px-4 rounded-md text-blue-700 text-sm uppercase">
            {item.status}
          </h4>
        )}
        {item.status === "processing" && (
          <h4 className="font-semibold bg-[#5F6F52]/20 py-2 px-4 rounded-md text-[#5F6F52] text-sm uppercase">
            {item.status}
          </h4>
        )}
        {item.status === "completed" && (
          <h4 className="font-semibold bg-green-200 py-2 px-4 rounded-md text-green-700 text-sm uppercase">
            {item.status}
          </h4>
        )}
        {item.status === "cancelled" && (
          <h4 className="font-semibold bg-red/20 py-2 px-4 rounded-md text-redhover text-sm uppercase">
            {item.status}
          </h4>
        )}
      </td>

      <td className="py-3 px-6 border-b text-center hidden md:table-cell">
        {item.status === "pending" && (
          <FaStopwatch size={25} className="text-blue-700" />
        )}
        {item.status === "processing" && (
          <PiCookingPotFill size={25} className="text-[#5F6F52]" />
        )}
        {item.status === "completed" && (
          <FaCheckCircle size={25} className="text-green-700" />
        )}
        {item.status === "cancelled" && (
          <MdCancel size={28} className="text-redhover" />
        )}
      </td>
    </tr>
  );
};

export default Orders;
