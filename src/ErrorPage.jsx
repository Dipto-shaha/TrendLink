import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center">
                <img className="w-20 h-20"src='https://i.ibb.co/C03v53c/logo.png'></img>
                <a className="btn btn-ghost normal-case text-xl">TrendLink</a>
            </div>
            <div className="items-center flex justify-center flex-col" >
                <div><img className="h-80 w-80 rounded-xl" src='https://i.ibb.co/PxtZBzq/A-404-Page-Best-Practices-and-Design-Inspiration.jpg' alt="" /></div>
                <Link to='/' className="px-4 py-2 rounded-lg">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;