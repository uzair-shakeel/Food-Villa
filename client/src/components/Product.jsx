import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import NewArrival from "./NewArrival";
import { useCartContext } from "../context/cartContext";
import { AuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import BASE_URL from "../utils/config";

const Product = () => {
  // Get the id from the URL parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch data based on the id
  const { apiData: food, error } = useFetch(`${BASE_URL}/food/foods/${id}`);

  // Initialize quantity state with a default value of 1
  const [quantity, setQuantity] = useState(1);
  // const { addToCart } = useCartContext();
  const { updateTotalPrice, updateItemsLength } = useCartContext();
  const { user, token } = useContext(AuthContext);

  const handleAddToCart = async () => {
    if (!token || token === null || token === "null") {
      toast.error("Please Login First");
    } else {
      try {
        const response = await fetch(`${BASE_URL}/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            items: [
              {
                product: food._id,
                quantity: quantity,
                productPrice: food.price,
              },
            ],
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
          console.log("Item added to cart:", result.data);
          updateTotalPrice(result.data.totalPrice);
          updateItemsLength(result.data.items.length);

          // Perform any additional actions after adding item to cart, if needed
        }
      } catch (error) {
        toast.error("Error adding item to cart");
        console.log("Error adding item to cart:", error.message);
      }
    }
  };

  const handleOrderNow = async () => {
    if (!token || token === null || token === "null") {
      toast.error("Please Login First");
    } else {
      try {
        const response = await fetch(`${BASE_URL}/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            items: [
              {
                product: food._id,
                quantity: quantity,
                productPrice: food.price,
              },
            ],
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
        } else {
          console.log("Item added to cart:", result.data);
          updateTotalPrice(result.data.totalPrice);
          updateItemsLength(result.data.items.length);
          navigate("/cart");
          // Perform any additional actions after adding item to cart, if needed
        }
      } catch (error) {
        toast.error("Error adding item to cart");
        console.log("Error adding item to cart:", error.message);
      }
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }, []);

  if (!food) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const increaseQuantity = async () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = async () => {
    setQuantity(quantity - 1);
  };

  return (
    <section className="py-3 px-2 sm:px-4 md:px-6 section">
      <div className="container mx-auto py-[14vh]">
        <div className="grid grid-cols-1 px-6 relative lg:grid-cols-2 gap-8 py-8 items-center">
          <div className="flex justify-center items-center w-full">
            <img
              src={food.image}
              alt="Home Page Pic"
              className="h-auto md:h-[350px] max-w-full rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-9">
            <div className="text-2xl md:text-3xl font-bold text-red lg:text-4xl">
              {food.name}
              <p className="text-lg font-light md:text-xl my-4 text-black leading-9 ">
                {food.description}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-orange text-2xl font-semibold">Quantity</p>
              <div className="flex gap-2 items-center">
                <button onClick={decreaseQuantity}>
                  <FaSquareMinus size={30} />
                </button>
                <p className="bg-white px-5 py-2 rounded-md shadow-md">
                  {quantity}
                </p>
                <button onClick={increaseQuantity}>
                  <FaSquarePlus size={30} />
                </button>
              </div>
            </div>
            <h2 className="text-xl font-bold">
              Rs. <span className="text-4xl">{food.price}</span>
            </h2>
            <div className="gap-4 flex">
              <button
                // onClick={() => addToCart(food)}
                onClick={handleAddToCart}
                className="buttonn bg-orange hover:bg-orangehover w-full"
              >
                Add to Cart
              </button>
              <Link
                className="button w-full text-center"
                onClick={handleOrderNow}
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <NewArrival />
      </div>
    </section>
  );
};

export default Product;
