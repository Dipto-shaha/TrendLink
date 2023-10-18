import { useEffect, useState } from "react";
import NewsLetter from "./NewsLetter";
import Brand from "./Brand";

const Home = () => {
  const [brand,setBrand]=useState([]);
  useEffect(()=>{
    fetch('/brand.json')
    .then(res =>res.json())
    .then(data => setBrand(data))
  },[]);
  return (
    <div>
      <div className="flex bg-[#515474] px-5 justify-between">
        <div className="py-5">
          <div className="text-5xl text-[#FFF]">
            Discover the Latest Trends in Fashion at TrendLink <br></br>- Your
            Ultimate Style Destination!
          </div>
          <button className=" my-5 px-5 py-2 bg-[#FFF] rounded-lg">
            {" "}
            Shop now
          </button>
        </div>
        <div className=" h-80 pt-2">
          <img
            className="h-full"
            src="https://i.ibb.co/s6Dj4ZC/home.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center">
        <p>Our popular brand</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-20 gap-10">
        {brand.length>0 && brand.map(info => <Brand key={info.id} info={info}></Brand>)}
        </div>
      </div>
      <p>Exceptional Customer Care, Our Promise of Assurance, and Nationwide Delivery - Your Perfect Shopping Experience!</p>
      <div className=" flex justify-between flex-col lg:flex-row px-20 py-2 h-80">
        <div className="w-80 h-full rounded-xl">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/fSgk29j/Screenshot-2023-10-18-023633.png"
          />
          <p>Quality Support</p>
        </div>
        <div className=" w-80  h-full ">
          <img
            className="h-full w-full rounded-xl"
            src="https://i.ibb.co/WBfVVmv/money-back-guarantee-sticker-1394-387.jpg"
            alt=""
          />
          <p>Money Back Gaurenty</p>
        </div>
        <div className="w-80 h-full">
          <img
            className="h-full w-full rounded-xl"
            src="https://i.ibb.co/6DH5x8s/still-life-supply-chain-representation-23-2149827292.jpg"
            alt=""
          />
          <p>Shipping Countrywide</p>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
