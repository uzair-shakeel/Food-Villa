import React from "react";
import { FaStopwatch, FaCheckCircle } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

const Users = ({ user }) => {
  // Assuming {item.createdAt} is a string representing a date
  const createdAtDate = new Date(user.createdAt); // Convert the string to a Date object
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
          <div className="font-bold text-sm">{user._id}</div>
        </div>
      </div>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {user.name}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {user.email}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {user.role}
      </h4>

      <h4
        className="
      font-semibold text- text-sm uppercase w-2/5"
      >
        {formattedDate} - {time}
      </h4>
    </div>
  );
};

export default Users;
