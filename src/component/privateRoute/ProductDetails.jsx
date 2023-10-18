import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {_id}=useParams();
    const [info ,setInfo] =useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/productDetails/${_id}`)
        .then(res => res.json())
        .then(data => setInfo(data));
    },[]);
    return (
        <div>
            <img className=" w-60 h-60 rounded-lg" src={info.image}></img>
            <p>{info.name}</p>
            <p>{info.brand}</p>
            <p>{info.description}</p>
            <p>{info.price}</p>
            <p>{info.rating}</p>
            <p>{info.type}</p>
        </div>
    );
};

export default ProductDetails;
