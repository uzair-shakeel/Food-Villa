import React, { useContext, useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Users from "../../shared/Users";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";

const ManageUsers = () => {
  const [tab, setTab] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/user/getAllUsers?role=${tab}`,
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
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5  text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Total Users</h1>
              <div className="md:col-span-2 md:px-[30px] ">
                <div>
                  <button
                    onClick={() => setTab("")}
                    className={`${
                      tab === "" && "bg-orange text-white font-bold"
                    } p-2 mr-5 px-5 rounded-md text-HeadingColor font-semibold text-[16px] leading-7 border border-solid border-Color`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setTab("user")}
                    className={`${
                      tab === "user" && "bg-orange text-white font-bold"
                    } p-2 mr-5 px-5 rounded-md text-HeadingColor font-semibold text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Users
                  </button>
                  <button
                    onClick={() => setTab("admin")}
                    className={`${
                      tab === "admin" && "bg-orange text-white font-bold"
                    } p-2 mr-5 px-5 rounded-md text-HeadingColor font-semibold text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Admins
                  </button>
                </div>
              </div>
              <h2 className="font-semibold text-2xl">
                {users?.data?.length || 0} {tab === "admin" ? "Admin" : "Users"}
              </h2>
            </div>
            <div className="mt-10">
              <table className="min-w-full text-center">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">User ID</th>
                    <th className="py-3 px-6 ">Name</th>
                    <th className="py-3 px-6 ">Email</th>
                    <th className="py-3 px-6 ">Role</th>
                    <th className="py-3 px-6 ">Date of Registration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm ">
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
