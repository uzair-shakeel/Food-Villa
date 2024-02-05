import React from "react";
import { FaSearch, FaHeart, FaStar } from "react-icons/fa";
import FaqList from "../components/FAQ/FaqList";
import HomePic from "../assets/Home.png";
import ChefPic from "../assets/chef.png";
import FaqPic from "../assets/faq.png";
const Home = () => {
  return (
    <>
      {/* // Home Section Starts */}
      <section className="py-3 px-10 sm:px-4 md:px-6 section">
        <div className="container mx-auto py-[14vh]">
          <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black lg:text-6xl">
                Elevate Your
                <span className="text-red"> Dining </span>at{" "}
                <span className="text-orange">Food Villa.</span>
                <p className="text-lg font-light md:text-xl my-4 leading-9 ">
                  "Elevate your dining experience at Food Villa Haven, where
                  culinary excellence meets a haven of delightful flavors.
                  Immerse yourself in a world of gastronomic wonders, where each
                  dish is crafted with passion and precision."
                </p>
              </div>
              <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white  shadow-md">
                <div className="flex items-center w-full">
                  <FaSearch size={15} className="text-gray" />
                  <input
                    type="text"
                    placeholder="Burger..?"
                    className="text-black w-full border-none outline-none py-2 px-4"
                  />
                </div>
                <div className="h-10 w-10 cursor-pointer relative bg-orange rounded-full">
                  <FaSearch
                    size={20}
                    className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>

            <div className="items-center">
              <img
                src={HomePic}
                alt="Home Page Pic"
                className="max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* // Home Section ends */}
      {/* // Recommendation Section Starts */}
      <section className="py-3 px-10 sm:px-4 md:px-6">
        <div className="container mx-auto py-[2vh]">
          <div className="text-2xl md:text-3xl font-bold text-center text-black lg:text-4xl">
            Recommended <span className="text-red">Food</span>
          </div>

          <div className="grid py-6 lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      250
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Chicken Burger
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      250
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Chicken Burger
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      250
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Chicken Burger
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      250
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Chicken Burger
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Recommendation Section Ends */}
      {/* Service Section Start */}
      <section className="py-3 px-10 sm:px-4 md:px-6">
        <div className="container mx-auto py-[2vh]">
          <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center px-2">
            <div className="flex justify-center items-center w-full">
              <img src={ChefPic} alt="" className="max-h-[450px]" />
            </div>

            <div className="max-w-screen flex flex-col space-y-6">
              <div className="text-2xl md:text-3xl font-bold lg:text-4xl">
                Services that <span className="text-red"> Delight</span> Your{" "}
                <span className="text-orange">Taste Buds</span>
              </div>
              <p className="leading-8">
                "Experience personalized dining at Food Villa with our
                exceptional services. From curated events to private gatherings,
                savor perfection in every bite. Explore unique offerings for
                memorable moments, tailored just for you."
              </p>
              <button className="btn md:w-1/3 lg:w-1/4">About Us</button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Ends */}
      {/* Special Section Starts */}
      <section className="py-3 px-10 sm:px-4 md:px-6">
        <div className="container mx-auto py-[2vh]">
          <div className="text-2xl md:text-3xl font-bold text-center text-black lg:text-4xl">
            Special <span className="text-red">Food</span>
          </div>

          <div className="grid py-6 lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
            <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
              <div className="relative mb-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
                  alt=""
                />
                <div className="absolute top-2 left-2">
                  <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
                    <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2">
                  <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
                    <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      950
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex w-full px-4 items-center justify-between">
                <p className="text-xl text-center font-bold text-red">
                  Fajita Pizza
                </p>
                <div className="flex items-center text-sm space-x-2 cursor-pointer">
                  <span className="font-normal text-orange">4.5</span>
                  <FaStar size={15} className="text-orange" />
                  <span className="font-medium">(4)</span>
                </div>
              </div>
              <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Special Section Ends */}
      {/* FAQ Section Starts */}
      <section className="py-3 px-10 sm:px-4 md:px-6">
        <div className="container">
          <div className="text-2xl md:text-3xl font-bold text-center text-red lg:text-4xl">
            Food Villa's{" "}
            <span className="text-black">Frequently Asked Questions</span>
          </div>
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-full md:w-1/2">
              <FaqList />
            </div>
            <div className="w-1/2 hidden md:flex md:justify-center">
              <img src={FaqPic} alt="" className="max-w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section Ends */}
    </>
  );
};

export default Home;
