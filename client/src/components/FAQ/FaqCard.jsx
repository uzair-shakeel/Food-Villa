import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const togglebtn = () => {
    setOpen(!open);
  };
  return (
    <div className="p-1 lg:p-3 rounded-[6px] border border-solid border-[#D9DCE2] mb-3 cursor-pointer">
      <div
        className="flex items-center justify-between gap-5"
        onClick={togglebtn}
      >
        <h4 className="text-md leading-7 lg:text-lg lg:leading-8 text-HeadingColor">
          {item.question}
        </h4>
        <div
          className={` ${
            open && "border-none"
          } w-7 h-7 lg:w-8 lg:h-8 rounded flex items-center justify-center`}
        >
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {open && (
        <div className="mt-4">
          <p className="text-sm leading-6 lg:text-md lg:leading-7 font-[400] text-gray">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
