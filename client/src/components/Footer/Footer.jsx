import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between flex-col md:flex-row bg-orange/40 p-10 bg-base-200 text-base-content">
      <aside className="flex items-center flex-col text-center mb-8 md:-mb-0">
        <img src={logo} alt="" className="max-h-[130px] max-w-[130px]" />

        <p className="font-bold">
          Food Villa Ltd.
          <br />
          <span className="font-semibold">Where Flavor Meets Elegance</span>
        </p>
      </aside>
      <nav className="flex flex-col gap-4 text-center lg:text-start mb-8 md:mb-0 ">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="flex flex-col gap-4 text-center lg:text-start mb-8 md:mb-0">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="flex flex-col gap-4 text-center lg:text-start ">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
