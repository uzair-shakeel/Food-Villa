import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { apiData: totalItems } = useFetch(`http://localhost:3000/food`);
  const { apiData: totalUsers } = useFetch(
    `http://localhost:3000/user/getAllUsers`
  );
  const { apiData: totalOrders } = useFetch(`http://localhost:3000/order`);
  const { apiData: totalPendingOrders } = useFetch(
    `http://localhost:3000/order?status=pending`
  );
  const { apiData: totalReceivedOrders } = useFetch(
    `http://localhost:3000/order?status=processing`
  );
  const { apiData: totalCompletedOrders } = useFetch(
    `http://localhost:3000/order?status=completed`
  );
  const { apiData: totalCancelledOrders } = useFetch(
    `http://localhost:3000/order?status=cancelled`
  );

  return (
    <div className="pt-14 min-h-screen flex flex-col gap-10 items-center justify-center section">
      <div className="flex gap-10 items-center justify-center ">
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
          Total Orders - {totalOrders?.length}
        </Link>
        <Link
          to={"/manage-items"}
          className="bg-orange/10 shadow-lg active:scale-95 hover:bg-orange/70 duration-150 hover:shadow-xl hover:scale-105 shadow-orangehover rounded-lg py-8 px-10 font-bold"
        >
          Total Items - {totalItems?.length}
        </Link>
      </div>
      <div className="flex gap-10 items-center justify-center ">
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Pending Orders - {totalPendingOrders?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Received Orders - {totalReceivedOrders?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Completed Orders - {totalCompletedOrders?.length}
        </Link>
        <Link
          to={"/manage-orders"}
          className="bg-blue-100 shadow-lg active:scale-95 hover:bg-blue-300 duration-150 hover:shadow-xl hover:scale-105 shadow-blue-800 rounded-lg py-8 px-10 font-bold"
        >
          Cancelled Orders - {totalCancelledOrders?.length}
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
