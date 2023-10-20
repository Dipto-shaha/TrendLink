import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContest } from "../../Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rate } from 'antd';

const ProductDetails = () => {
  const { user } = useContext(AuthContest);
  const { _id } = useParams();
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://trend-link-server.vercel.app/productDetails/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInfo(data), setLoading(false);
      });
  }, []);
  const addproduct = () => {
    const cartInfo = { productId: info._id, user_id: user.email };
    console.log(cartInfo);
    fetch(
      "https://trend-link-server.vercel.app/saveCartProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartInfo),
      }
    )
      .then((res) => res.json())
      .then((serverInfo) => {
        console.log(serverInfo);
        toast.success("Product added to cart successfully");
      });
  };
  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <span className="loading loading-bars loading-md"></span>
          <span className=" text-7xl loading loading-bars loading-lg "></span>
        </div>
      ) : (
        <div className="mx-5 lg:mx-20 my-10">
          <p className="text-xl lg:text-3xl  font-semibold text-center my-5 ">
            {info.brand} Fashion Faves: Elevate Your Wardrobe with
            TrendLink&apos;s Latest Picks
          </p>
          <img
            className="mx-auto w-1/2 lg:h-[350px] rounded-lg"
            src={info.image}
          ></img>
          <p className="text-2xl font-semibold text-center my-5 ">
            {info.name}
          </p>
          <ul className="ml-10 lg:ml-[350px] text-xl font-medium">
            <li>Brand: {info.brand}</li>
            <li>Price: {info.price}</li>
            <li>Rating: <Rate disabled allowHalf defaultValue={info.rating} /></li>
            <li>Type: {info.type}</li>
            <li>Product Details: {info.description}</li>
          </ul>
          <div className="flex  justify-center mt-5 items-center">
            <button
              className=" px-5 py-2  bg-[#515474] rounded-lg text-[#FFF] roounded"
              onClick={addproduct}
            >
              {" "}
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
