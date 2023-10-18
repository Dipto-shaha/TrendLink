import { useEffect,useState } from "react";

const MyCart = () => {
    const userId=6726372;
    const [info ,setInfo] =useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/saveCartProduct/${userId}`)
          .then(res => res.json())
          .then(cartItems => {
            console.log(cartItems);
            const promises = cartItems.map(item =>
              fetch(`http://localhost:5000/productDetails/${item.productId}`)
                .then(res => res.json())
            );
            Promise.all(promises).then(products => {
              console.log("Here", products);
              setInfo(products);
            });
          });
      }, []);
    const handleDelete =(_id)=>{
        fetch(`http://localhost:5000/cartDelete/${_id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    return (
        <div>
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
                            <button onClick={()=>handleDelete(item._id)}>Delete</button>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default MyCart;