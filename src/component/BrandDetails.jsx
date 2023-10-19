import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandDetails = () => {
    const { brand }= useParams();
    const [info,setInfo]=useState([]);
    const [loading,setLoading]=useState(true);
    console.log("I am Here",brand);
    useEffect(()=>{
        fetch(`http://localhost:5000/branddetails/${brand}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setLoading(false);
            setInfo(data)
        });
    },[]);
    return (
        <div>
            {
              loading &&   <div className="flex h-screen justify-center items-center"><span className="loading loading-bars loading-md"></span>
                <span className=" text-7xl loading loading-bars loading-lg "></span></div>
            }
            {info.length >0 ? 
                <div className="mt-5">
                    <p>{info[0].brand}</p>
                    <div className="carousel w-1/4 h-[350px]">
                        <div id="slide1" className="carousel-item relative w-full">
                        <img src={info[0].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                        <img src={info[1].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                        <img src={info[2].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                    {info.map((item)=>
                        <div key={item._id} className="border-2">
                            <img className=" w-60 h-60 rounded-lg" src={item.image}></img>
                            <p>{item.name}</p>
                            <p>{item.brand}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <p>{item.rating}</p>
                            <p>{item.type}</p>
                            <div className="flex">
                                <Link to={`/updateProduct/${item._id}`}>Update</Link>
                                <Link to={`/productDetails/${item._id}`}>Details</Link>
                            </div>

                        </div>
                    )}
                    </div>
                </div> 
                :
                <p>No Product Available right now</p>
            }
        </div>
    );
};

export default BrandDetails;