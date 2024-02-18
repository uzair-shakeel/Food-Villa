import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const [totalOrders, setTotalOrders] = useState();
  const [totalPendingOrders, setTotalPendingOrders] = useState();
  const [totalReceivedOrders, setTotalReceivedOrders] = useState();
  const [totalCompletedOrders, setTotalCompletedOrders] = useState();
  const [totalCancelledOrders, setTotalCancelledOrders] = useState();
  console.log(totalOrders);
  const { apiData: totalItems } = useFetch(`${BASE_URL}/food`);
  const { apiData: totalUsers } = useFetch(`${BASE_URL}/user/getAllUsers`);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order`, {
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
        setTotalOrders(data);
      } catch (error) {
        toast.error(error.message);
        setError(error.message);
      }
    };

    const fetchPendingOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order?status=pending`, {
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
        setTotalPendingOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchReceivedOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order?status=processing`, {
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
        setTotalReceivedOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchCompletedOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order?status=completed`, {
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
        setTotalCompletedOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchCancelledOrders = async () => {
      try {
        const response = await fetch(`${BASE_URL}/order?status=cancelled`, {
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
        setTotalCancelledOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchOrders();
    fetchPendingOrders();
    fetchReceivedOrders();
    fetchCompletedOrders();
    fetchCancelledOrders();
  }, []);

  return (
    <div className="pt-14 min-h-screen flex flex-col gap-10 items-center justify-center py-6 section">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center pt-6">
        <Link
          to={"/manage-users"}
          className="bg-orange/10 shadow-lg active:scale-95 hover:bg-orange/70 duration-150 hover:shadow-xl hover:scale-105 shadow-orangehover rounded-lg py-8 px-10 font-bold"
        >
          Total Users - {totalUsers?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-orange/10 shadow-lg  active:scale-95 hover:bg-orange/70 duration-150 hover:shadow-xl hover:scale-105 shadow-orangehover rounded-lg py-8 px-10 font-bold"
        >
          Total Orders - {totalOrders?.data?.length}
        </Link>
        <Link
          to={"/manage-items"}
          className="bg-orange/10 shadow-lg active:scale-95 hover:bg-orange/70 duration-150 hover:shadow-xl hover:scale-105 shadow-orangehover rounded-lg py-8 px-10 font-bold"
        >
          Total Items - {totalItems?.length}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Pending Orders - {totalPendingOrders?.data?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Received Orders - {totalReceivedOrders?.data?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Completed Orders - {totalCompletedOrders?.data?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Cancelled Orders - {totalCancelledOrders?.data?.length}
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
