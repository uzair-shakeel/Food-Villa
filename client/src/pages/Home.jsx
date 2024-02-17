import React, { useEffect, useState } from "react";
import FaqList from "../components/FAQ/FaqList";
import HomePic from "../assets/Home.png";
import ChefPic from "../assets/chef.png";
import FaqPic from "../assets/faq.png";
import RecommendedFood from "../components/RecommendedFood";
import NewArrival from "../components/NewArrival";
import SearchBar from "../shared/SearchBar";

const Home = () => {
  const [aboutUs, setAboutUs] = useState("About Us");

  const handleAboutUs = () => {
    setAboutUs("There's nothing, hehe.");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
              <SearchBar />
            </div>

            <div className="items-center">
              <img
                src={HomePic}
                alt="Home Page Pic"
                className="max-h-[500px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* // Home Section ends */}
      {/* // Recommendation Section Starts */}
      {/* <Crousal /> */}
      <NewArrival />
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
              <button className="button" onClick={handleAboutUs}>
                {aboutUs}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Ends */}
      {/* Special Section Starts */}
      <RecommendedFood />
      {/* Special Section Ends */}
      {/* FAQ Section Starts */}
      <section className="py-3 px-10 sm:px-4 md:px-6">
        <div className="container h-auto py-6">
          <div className="text-2xl md:text-3xl font-bold text-center text-red lg:text-4xl">
            Food Villa's{" "}
            <span className="text-black">Frequently Asked Questions</span>
          </div>
          <div className="flex justify-between md:gap-[50px] lg:gap-0">
            <div className="w-full md:w-1/2">
              <FaqList />
            </div>
            <div className="w-1/2 hidden md:flex md:justify-center">
              <img src={FaqPic} alt="" className="my-20 h-[300px]" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section Ends */}
    </>
  );
};

export default Home;
