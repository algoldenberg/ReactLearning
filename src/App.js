import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Page404 from "./pages/Page 404";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  )
}

export default App;
