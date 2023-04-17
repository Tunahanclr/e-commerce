import {BrowserRouter,Routes,Route,Link} from"react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home";
import Footer from "./components/footer/Footer"
import PageContainers from "./containers/PageContainers";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="">
      <PageContainers>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
      </PageContainers>
    </div>
  );
}

export default App;
