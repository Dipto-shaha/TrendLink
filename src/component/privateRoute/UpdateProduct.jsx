import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateProduct = () => {
  const { _id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://trend-link-server-ausl12bvl-dipto-shahas-projects.vercel.app/productDetails/${_id}`
    )
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const name = form.get("name");
    const image = form.get("image");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const rating = form.get("rating");
    const description = form.get("description");
    const product = { name, image, brand, type, price, rating, description };
    console.log(product);
    fetch(
      `https://trend-link-server-ausl12bvl-dipto-shahas-projects.vercel.app/updateProduct/${info._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Product Updated Succcessfully");
      });
  };
  return (
    <div className="bg-[#5154745F] lg:mx-20 mx-10 py-10 my-10 px-20">
      <p className="text-center text-3xl font-bold mb-10">Update Product</p>
      <form onSubmit={handleUpdateProduct}>
        <div className="grid grid-cols-1 md:grid-cols-2 custom ">
          <div>
            <label>Name</label>
            <input type="text" name="name" required defaultValue={info.name} />
          </div>
          <div>
            <label>Image</label>
            <input type="text" name="image" defaultValue={info.image} />
          </div>
          <div>
            <label>Type </label>
            <input name="type" type="text" defaultValue={info.type} />
          </div>
          <div>
            <label>Price</label>
            <input
              name="price"
              type="text"
              defaultValue={info.price}
              required
            />
          </div>

          <div>
            <label>Rating</label>
            <input defaultValue={info.rating} name="rating" type="text" />
          </div>
          <div className="mt-5 flex  items-center">
            <p>Brand Name</p>
            <select className="ml-5" name="brand">
              <option value="" disabled selected>
                {info.brand}
              </option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Gucci">Gucci</option>
              <option value="Zara">Zara</option>
              <option value="H&M">H&M</option>
              <option value="Levi's">Levi&apos;s</option>
            </select>
          </div>
        </div>

        <div className="w-full custom">
          <label>Short description</label>
          <textarea
            defaultValue={info.description}
            name="description"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="px-10 py-2 font-bold text-[#FFF] bg-[#2b3440] rounded-xl">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
