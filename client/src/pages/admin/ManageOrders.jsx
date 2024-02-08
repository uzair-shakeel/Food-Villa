import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext";
import AdminOrders from "../..//shared/AdminOrders";

const ManageUsers = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);
  console.log(orders);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:3000/order`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          console.log("Failed to fetch users");
          toast.error(response.message);
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="pt-14">
      <div
        className={orders?.data?.length === 0 ? "bg-orange h-96" : "bg-orange"}
      >
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5  text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Total Orders</h1>

              <h2 className="font-semibold text-2xl">
                {orders?.data?.length || 0}
              </h2>
            </div>
            <div className="mt-10 flex mb-5 text-black/80">
              <h3 className="font-semibold text- text-sm uppercase w-3/5">
                User Name / Email
              </h3>
              <h3 className="font-semibold text-sm uppercase w-2/5">
                Total Amount
              </h3>
              <h3 className="font-semibold text-sm uppercase w-2/5">
                Date - Time of Order
              </h3>
              <h3 className="font-semibold  text-sm uppercase w-2/5">Status</h3>
              <h3 className="font-semibold text-sm uppercase w-2/5">
                Item Name - Qty
              </h3>
            </div>

            {orders?.data?.map((item) => {
              return <AdminOrders item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
