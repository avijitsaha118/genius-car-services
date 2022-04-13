import React from 'react';
import sleeping from '../../../Images/000-404.png';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>404 NOT FOUND</h2>
            <img src={sleeping} alt='pic'></img>

        </div>
    );
};

export default NotFound;