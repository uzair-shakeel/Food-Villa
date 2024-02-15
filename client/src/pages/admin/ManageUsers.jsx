import React, { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Users from "../../shared/Users";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";
import BASE_URL from "../../utils/config";

const ManageUsers = () => {
  const [tab, setTab] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/user/getAllUsers?role=${tab}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          console.log("Failed to fetch users");
          toast.error(response.message);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      }
    };

    fetchUsers();
  }, [tab]);

  return (
    <div className="pt-14">
      <div
        className={users?.data?.length === 0 ? "bg-orange h-96" : "bg-orange"}
      >
        <div className="container mx-auto px-5 py-6 overflow-hidden">
          <div className="w-full bg-white px-3 md:px-6 lg:px-10 py-5  text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
                Total Users
              </h1>
              <div className="block md:hidden">
                <select
                  onChange={(e) => setTab(e.target.value)}
                  className="select select-bordered select-xs w-full max-w-xs"
                >
                  <option value="">All</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="hidden md:inline-block col-span-2 md:px-[30px] ">
                <div>
                  <button
                    onClick={() => setTab("")}
                    className={`${
                      tab === "" && "bg-orange text-white font-bold"
                    } hidden md:inline-block p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setTab("user")}
                    className={`${
                      tab === "user" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Users
                  </button>
                  <button
                    onClick={() => setTab("admin")}
                    className={`${
                      tab === "admin" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Admins
                  </button>
                </div>
              </div>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                {users?.data?.length || 0} {tab === "admin" ? "Admin" : "Users"}
              </h2>
            </div>
            <div className="mt-10 overflow-x-auto">
              <table className="w-[120%] lg:w-full text-center ">
                <thead>
                  <tr className="bg-gray-200 border-b text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left table-cell">User ID</th>
                    <th className="py-3 px-6 ">Name</th>
                    <th className="py-3 px-6 ">Email</th>
                    <th className="py-3 px-6 ">Role</th>
                    <th className="py-3 px-6 table-cell">
                      Date of Registration
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-xs md:text-sm ">
                  {users?.data?.map((user) => (
                    <Users user={user} key={user._id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
