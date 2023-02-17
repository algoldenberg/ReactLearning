import React from 'react';
import {Link} from "react-router-dom";
import Page404 from '../../../pages/Page 404';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__links">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            </div>
        </div>
     );
}
 
export default Navbar;