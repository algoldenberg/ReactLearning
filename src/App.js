import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, redirect} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Page404 from "./pages/Page 404";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="posts" element={<Posts />} />
            <Route path="about" element={<About />} />
            <Route path="/*" element={<Page404/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
