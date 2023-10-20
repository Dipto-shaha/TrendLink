import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContest } from "../../Context";
import { Rate } from 'antd';

const MyCart = () => {
  const { user } = useContext(AuthContest);
  const [info, setInfo] = useState([]);
  const [loading,setLoading] =useState(true);
  useEffect(() => {
    fetch(
      `https://trend-link-server.vercel.app/saveCartProduct/${user.email}`
    )
      .then((res) => res.json())
      .then((cartItems) => {
        console.log(cartItems);
        const promises = cartItems.map((item) =>
          fetch(
            `https://trend-link-server.vercel.app/productDetails/${item.productId}`
          ).then((res) => res.json())
        );
        Promise.all(promises).then((products) => {
          console.log("Here", products);
          setInfo(products);
          setLoading(false);
        });
      });
  }, []);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://trend-link-server.vercel.app/cartDelete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount >= 1) {
              const newData = info.filter((item) => item._id != _id);
              setInfo(newData);
              Swal.fire(
                "Deleted!",
                "Your Product has been removed from cart.",
                "success"
              );
            }
          });
      }
    });
  };
  if(loading) return (
    <div className="flex h-screen justify-center items-center">
          <span className="loading loading-bars loading-md"></span>
          <span className=" text-7xl loading loading-bars loading-lg "></span>
        </div>
  );
  return (
    <div className="mx-5 lg:mx-20  my-10">
        {
        info.length>0 ?
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5">
        {info.map((item) => (
          <div key={item._id} className="flex border-2 rounded-md">
            <div>
              <img className=" w-60 h-60 rounded-lg" src={item.image}></img>
            </div>
            <div className="ml-3 lg:ml-10  mt-10 ">
              <p className="text-xl font-bold">{item.name}</p>
              <p className="font-semibold">{item.brand}</p>
              <p className="">Price: {item.price}</p>
              <p>Rating: <Rate disabled allowHalf defaultValue={item.rating} /></p>

              <p>Type: {item.type}</p>
              <button
                className="px-5 py-2 bg-[#ff4d4d] rounded-lg mt-2 flex items-center text-[#FFF]"
                onClick={() => handleDelete(item._id)}
              >
                {" "}
                <AiFillDelete className="mr-2"></AiFillDelete> Delete
              </button>
            </div>
          </div>
        ))}
        </div>
        :
        <div>
          <div className="mx-auto w-1/3">
          <img className="w-full" src="https://i.ibb.co/9YQvrM8/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-mo.jpg" alt="" />
          </div>
        <p className="text-center text-2xl lg:text-5xl font-semibold">You don&apos; have any product in cart</p>
        </div>
        }
    </div>
  );
};

export default MyCart;
