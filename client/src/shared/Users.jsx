import React from "react";

const Users = ({ user }) => {
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toDateString();
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const time = createdAtDate.toLocaleTimeString("en-US", options);

  return (
    <tr className="border-b">
      <td className="py-3 px-6 text-left table-cell">{user._id}</td>
      <td className="py-3 md:px-6 ">{user.name}</td>
      <td className="py-3 md:px-6 ">{user.email}</td>
      <td className="py-3 px-6 ">
        {user.role === "user" && (
          <h4 className="font-semibold bg-blue-200 py-2 px-4 rounded-md text-blue-700 text-sm uppercase">
            {user.role}
          </h4>
        )}
        {user.role === "admin" && (
          <h4 className="font-semibold bg-red/20 py-2 px-4 rounded-md text-red text-sm uppercase">
            {user.role}
          </h4>
        )}
      </td>
      <td className="py-3 px-6 table-cell">
        {formattedDate} - {time}
      </td>
    </tr>
  );
};

export default Users;
