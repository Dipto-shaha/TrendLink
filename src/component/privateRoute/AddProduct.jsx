import "./addproduct.css";
const AddProduct = () => {

  const handleAddProduct = e =>{
    e.preventDefault();
    console.log('Hello');
    const form= new FormData(e.currentTarget);
    console.log(form);
    const name= form.get('name');
    const image= form.get('image');
    const brand= form.get('brand');
    const type= form.get('type');
    const price= form.get('price');
    const rating= form.get('rating');
    const description= form.get('description');
    const product={name,image,brand,type,price,rating,description};
    console.log(product);
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

  }
  return (
    <>
      <div className="bg-[#5154745F] px-20">
        <p className="text-center text-3xl font-bold">Add a New Product</p>
        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 custom ">
            <div>
              <label>Image</label>
              <input type="text" name="image" placeholder="Add your product image" />
            </div>
            <div>
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Brand Name</label>
              <select className="" name="brand" required>
                <option value="" disabled selected>
                  Select a Brand
                </option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Gucci">Gucci</option>
                <option value="Zara">Zara</option>
                <option value="H&M">H&M</option>
                <option value="Levi's">Levi&apos;s</option>
              </select>
            </div>
            <div>
              <label>Type </label>
              <input name='type' type="text"  />
            </div>
            <div>
              <label>Price</label>
              <input name='price' type="text"  required/>
            </div>

            <div>
              <label >Rating</label>
              <input name='rating' type="text" />
            </div>
          </div>
          <div className="w-full custom">
            <label>Short description</label>
            <textarea
              placeholder="Write Product description"
              name='description'
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
          </div>
          <div className="">
            <button>Add button</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
