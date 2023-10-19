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
    <>
      <div className="flex bg-[#515474] px-5 justify-between">
        <div className="md:py-10 py-5">
          <div className="text-2xl md:text-5xl text-[#FFF]">
            Discover the Latest Trends in Fashion at TrendLink <br></br>- Your
            Ultimate Style Destination!
          </div>
          <button className=" my-10 px-5 py-2 lg:mt-12 mt-5 font-semibold bg-[#FFF] rounded-lg">
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
        <p className="text-3xl lg:text-5xl font-bold my-8">Our Popular Brand</p>
        <div className="mx-5 lg:mx-20 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-20 gap-10">
        {brand.length>0 && brand.map(info => <Brand key={info.id} info={info}></Brand>)}
        </div>
      </div>
      <p className="mx-5 lg:mx-20 mt-20 mb-10 text-2xl  text-center font-semibold ">Exceptional Customer Care, Our Promise of Assurance, and Nationwide Delivery - Your Perfect Shopping Experience!</p>
      <div className="mx-5 lg:mx-20 flex justify-between  text-center flex-col lg:flex-row px-8  lg:px-20 py-2 lg:h-72">
        <div className="w-80 h-full rounded-xl">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/fSgk29j/Screenshot-2023-10-18-023633.png"
          />
          <p className="text-xl pt-2">Quality Support</p>
        </div>
        <div className=" w-80  h-full ">
          <img
            className="h-full w-full rounded-xl"
            src="https://i.ibb.co/WBfVVmv/money-back-guarantee-sticker-1394-387.jpg"
            alt=""
          />
          <p className="text-xl pt-2">Money Back Gaurenty</p>
        </div>
        <div className="w-80 h-full pt-5 lg:pt-0">
          <img
            className="h-full w-full rounded-xl"
            src="https://i.ibb.co/6DH5x8s/still-life-supply-chain-representation-23-2149827292.jpg"
            alt=""
          />
          <p className="text-xl pt-2"> Shipping Countrywide</p>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
