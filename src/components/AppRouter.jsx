import React from 'react';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Page404 from '../pages/Page 404';
import {Routes, Route} from "react-router-dom";


const AppRouter = () => {
    return ( 
        <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
     );
}
 
export default AppRouter;