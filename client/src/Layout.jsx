import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AddItem from "./pages/admin/AddItem";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Product from "./components/Product";
import SearchPage from "./pages/SearchPage";
import ManageItems from "./pages/admin/ManageItems";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageOrders from "./pages/admin/ManageOrders";
import EditItem from "./pages/admin/EditItem";
import Dashboard from "./pages/admin/Dashboard";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/update/:id" element={<EditItem />} />
        <Route path="/manage-items" element={<ManageItems />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-orders" element={<ManageOrders />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/food/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu/:id" element={<Product />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
