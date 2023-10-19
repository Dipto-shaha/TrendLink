import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContest } from "../../Context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {
    const {user}=useContext(AuthContest);
    const {_id}=useParams();
    const [info ,setInfo] =useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/productDetails/${_id}`)
        .then(res => res.json())
        .then(data => setInfo(data));
    },[]);
    const addproduct = ()=>{
        const cartInfo={productId:info._id ,user_id:user.email};
        console.log(cartInfo);
        fetch('http://localhost:5000/saveCartProduct',{
            method:'POST',
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(cartInfo),
        })
        .then(res=> res.json())
        .then(serverInfo => {
            console.log(serverInfo)
            toast.success("Product added to cart successfully")
        })
    }
    return (
        <div>
            <img className=" w-60 h-60 rounded-lg" src={info.image}></img>
            <p>{info.name}</p>
            <p>{info.brand}</p>
            <p>{info.description}</p>
            <p>{info.price}</p>
            <p>{info.rating}</p>
            <p>{info.type}</p>
            <button onClick={addproduct}> Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
