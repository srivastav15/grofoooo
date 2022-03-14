import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AboutUs from "../pages/AboutUs";
import HelpCenter from "../pages/HelpCenter";
import ContactUs from "../pages/ContactUs";
import Policy from "../pages/Policy";
import Blog from "../pages/Blog";
import RetailerLogin from "../pages/RetailerLogin";

const RouteView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/retailer-login" element={<RetailerLogin />} />
    </Routes>
  );
};

export default RouteView;
