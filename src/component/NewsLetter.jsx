
const NewsLetter = () => {
    return (
        <div className="text-center py-20 flex flex-col justify-center items-center">
             <img className="w-20 h-20"src='https://i.ibb.co/C03v53c/logo.png'></img>
             <p>Newsletter</p>
            <div className="join w-1/3">
                <input className="w-full input input-bordered rounded-r-lg join-item" placeholder="Enter your email here"/>
                <button className="btn join-item rounded-r-full">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;