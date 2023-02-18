import React from 'react';
import {Link} from "react-router-dom";
import Page404 from '../../../pages/Page 404';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/" className='navbar_text'>Home</Link>
                <Link to="/about" className='navbar_text'>About</Link>
                <Link to="/posts" className='navbar_text'>Posts</Link>
            </div>
        </div>
     );
}
 
export default Navbar;