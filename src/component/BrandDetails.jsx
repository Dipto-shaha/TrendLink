import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandDetails = () => {
  const { brand } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState({});
  console.log("I am Here", brand);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.find((item) => item.brand == brand);
        setAdd(newData);
        console.log(newData, "Here is the new Data");
      });

    fetch(`https://trend-link-server.vercel.app/branddetails/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setInfo(data);
      });
  }, []);
  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <span className="loading loading-bars loading-md"></span>
        <span className=" text-7xl loading loading-bars loading-lg "></span>
      </div>
    );
  return (
    <div>
        <div className="mt-5">
          <p>{brand}</p>
          <div className="carousel w-1/2 h-[350px]">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={add.image1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={add.image2} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={add.image3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          {info.length ? <div className=" grid grid-cols-1 lg:grid-cols-2">
            {info.map((item) => (
              <div key={item._id} className="border-2">
                <img className=" w-60 h-60 rounded-lg" src={item.image}></img>
                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>{item.price}</p>
                <p>{item.rating}</p>
                <p>{item.type}</p>
                <div className="flex">
                  <Link to={`/updateProduct/${item._id}`}>Update</Link>
                  <Link to={`/productDetails/${item._id}`}>Details</Link>
                </div>
              </div>
            ))}
          </div>:
          <div>
          <div className="mx-auto w-1/3 mt-20">
            <img
              className="w-full"
              src="https://i.ibb.co/DRWDstf/how-to-handle-out-of-stock-products-on-ecommerce-platforms-5f69fb622019e-1024x538.png"
              alt=""
            />
          </div>
          <p className="my-10 text-center text-2xl lg:text-5xl font-medium">
            {" "}
            <p className="mb-2">Sorry</p> <br />
            We currently have no <span className="font-bold">{brand}</span>{" "}
            brand products .
          </p>
        </div>
          }
        </div>
    </div>
  );
};

export default BrandDetails;
