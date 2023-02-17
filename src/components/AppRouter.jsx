import React from 'react';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Page404 from '../pages/Page 404';
import {Routes, Route} from "react-router-dom";
import PostIdPage from '../pages/PostIdPage';


const AppRouter = () => {
    return ( 
        <Routes>
        <Route exact path="posts" element={<Posts />} />
        <Route exact path="posts/:id" element={<PostIdPage />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<Page404/>} />
      </Routes>
     );
}
 
export default AppRouter;