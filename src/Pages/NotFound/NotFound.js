import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{width:'100%',height:'95vh'}} src={notFound} alt="" />
            <Link to='/home'><button className='btn btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;