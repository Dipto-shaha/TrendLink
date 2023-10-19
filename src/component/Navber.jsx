import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContest } from "../Context";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navber = () => {
  const {user,logOut} =useContext(AuthContest); 
    const handleLogout =()=>{
        logOut()
        .then(res => {console.log(res);
            toast.success("Log Out Successfully");
        })
        .catch(error => {console.log(error);})
    }
  return (
    <>
    <div className="navbar bg-[#f0f0ff]  ">
      <div className="navbar-start flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f0f0ff] rounded-box w-52"
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/addproduct'>Add Product</NavLink>
            </li>
            <li>
              <NavLink to='/mycart'> My Cart</NavLink>
            </li>
          </ul>
        </div>
        <img className="w-20 h-20 rounded-3xl"src='https://i.ibb.co/jH0K01t/logo.png'></img>
        <a className=" px-5 font-semibold text-2xl">TrendLink</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to='/'>Home</NavLink> 
            </li>
            <li>
              <NavLink to='/addproduct'>Add Product</NavLink>
            </li>
            <li>
              <NavLink to='/mycart'> My Cart</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? 
          <div className="flex justify-center items-center">
              <span className="flex justify-center items-center border-2 rounded-xl mr-2 "  >
              <img className=" rounded-full border-2 h-12 w-14  mx-2 "src={user.photoURL} alt="Image" />
              <p className="mr-2">{user.displayName ? user.displayName:"Name" }</p>
              </span> 
              <Link className="px-4 py-2 rounded text-[#FFF] bg-[#515474] " onClick={handleLogout} to={'/'}>Log Out</Link> 
          </div>:
          <Link className="px-4 py-3 rounded text-[#FFF] bg-[#515474] " to={'/login'}>Log In</Link>
        }
      </div>
    </div>
    <Outlet >
    </Outlet>
    <Footer></Footer>
    <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
    />
    </>
  );
};

export default Navber;
