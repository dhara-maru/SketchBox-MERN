import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Orders from './pages/Orders';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <ToastContainer></ToastContainer>
     <NavBar />
     <Searchbar></Searchbar>
     <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/items' element={<Items/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/contact' element={<Contact/>}  />
        <Route path='/cart' element={<Cart/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product/>}  />
        <Route path='/orders' element={<Orders/>}  />
        </Routes>
<Footer></Footer>
    </div>
  )
}

export default App
