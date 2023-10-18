import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({info })=> {
    return (
        <Link to={`/branddetails/${info.brand}`} className='px-10 py-2'>
            <img className=" h-[300px] w-[400px] rounded-lg" src={info.logo} alt="" />
            <p className='font-bold text-3xl'>{info.brand}</p>
        </Link>
    );
};

Brand.propTypes = {
    info:PropTypes.object
};

export default Brand;