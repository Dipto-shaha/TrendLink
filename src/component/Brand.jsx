import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({info })=> {
    return (
        <Link to={`/branddetails/${info.brand}`} className='bg-[#f0f0ff] px-10 py-2 rounded-xl shadow-lg shadow-[#d9d9f0]'>
            <img className="pt-5 h-[300px] w-[400px] rounded-xl" src={info.logo} alt="" />
            <p className='font-bold text-3xl'>{info.brand}</p>
        </Link>
    );
};

Brand.propTypes = {
    info:PropTypes.object
};

export default Brand;