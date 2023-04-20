import {BrowserRouter,Routes,Route,Link} from"react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home";
import Footer from "./components/footer/Footer"
import PageContainers from "./containers/PageContainers";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="">
      <PageContainers>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products/:id" element={<Detail/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
      </PageContainers>
    </div>
  );
}

export default App;
