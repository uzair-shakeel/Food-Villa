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
        <div className="flex items-center gap-4 ml-4 flex-grow">
          <div className="w-[50px]">
            <img
              src={item.user.profileImage}
              className="h-[50px] w-full object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="font-bold text-sm">
            {item.user.name} / {item.user.email}
          </div>
        </div>
      </div>

      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.totalAmount}
      </h4>
      <h4
        className="
      font-semibold text- text-sm uppercase w-2/5"
      >
        {formattedDate} - {time}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.status}
      </h4>
      <h4
        className="
      font-semibold text- text-sm uppercase w-2/5"
      >
        {item?.products?.map((product) => (
          <div key={product._id}>
            <div>
              {product.product.name} - {product.qty}
            </div>
          </div>
        ))}
      </h4>
    </div>
  );
};

export default Orders;
