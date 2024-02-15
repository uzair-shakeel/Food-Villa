import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";
import AdminOrders from "../../shared/AdminOrders";
import BASE_URL from "../../utils/config";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order?status=${status}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          console.log("Failed to fetch orders");
          toast.error(response.message);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      }
    };

    fetchOrders();
  }, [status]);

  return (
    <div className="pt-14">
      <div
        className={orders?.data?.length === 0 ? "bg-orange h-96" : "bg-orange"}
      >
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-3 md:px-6 lg:px-10 py-5 text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
                Total Orders
              </h1>
              <div className="block md:hidden">
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  className="select select-bordered select-xs w-full max-w-xs"
                >
                  <option value="">All</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="hidden md:inline-block col-span-2  md:px-[30px]">
                <div>
                  <button
                    onClick={() => setStatus("")}
                    className={`${
                      status === "" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setStatus("pending")}
                    className={`${
                      status === "pending" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setStatus("processing")}
                    className={`${
                      status === "processing" &&
                      "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Processing
                  </button>
                  <button
                    onClick={() => setStatus("completed")}
                    className={`${
                      status === "completed" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => setStatus("cancelled")}
                    className={`${
                      status === "cancelled" && "bg-orange text-white font-bold"
                    } p-1 md:p-2 mr-3 md:mr-5 px-3 md:px-5 rounded-md text-HeadingColor font-semibold text-[12px] md:text-[16px] leading-7 border border-solid border-Color`}
                  >
                    Cancelled
                  </button>
                </div>
              </div>
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                {orders?.data?.length || 0} {status}
              </h2>
            </div>
            <div className="mt-10 table-box overflow-x-auto">
              <table className="mt-10 w-[120%] lg:w-full mb-5 text-black/80 ">
                <thead>
                  <tr className="bg-gray-200 border-b text-gray-600 uppercase text-sm leading-normal">
                    <th className="font-semibold text-sm uppercase table-cell">
                      User Name / Email
                    </th>
                    <th className="font-semibold py-2 text-center text-sm uppercase">
                      Item Name - Qty
                    </th>
                    <th className="font-semibold py-2 text-center text-sm uppercase">
                      Status
                    </th>
                    <th className="font-semibold py-2 text-center text-sm uppercase">
                      Total Amount
                    </th>
                    <th className="font-semibold  py-2 text-center text-sm uppercase hidden lg:table-cell">
                      Date - Time of Order
                    </th>
                    <th className="font-semibold py-2 text-center text-sm uppercase">
                      Handle Order
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm ">
                  {orders?.data?.map((item) => (
                    <AdminOrders item={item} key={item._id} />
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

export default ManageOrders;
