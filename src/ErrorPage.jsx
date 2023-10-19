import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            <div className=" bg-[#d9d9f0] py-5 flex justify-center items-center ">
                <img className=" rounded-3xl w-32 h-20"src='https://i.ibb.co/jH0K01t/logo.png'></img>
                <a className=" px-5 font-semibold text-2xl">TrendLink</a>
            </div>
            <div className="mt-16 lg:mt-32 flex justify-center items-center flex-col " >
                <p className="text-3xl font-medium pb-5">Opps! Oage Not Found</p>
                <div><img className="h-80 w-[350px] lg:w-[420px] rounded-xl" src='https://i.ibb.co/PxtZBzq/A-404-Page-Best-Practices-and-Design-Inspiration.jpg' alt="" /></div>
                <Link to='/' className="px-4 py-2 rounded-lg bg-[#d9d9f0] font-bold mt-5 ">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;