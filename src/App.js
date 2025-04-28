// import Carousel from './component/Carousel';
// import Footer from './component/Footer';
// import Gift from './component/Gift';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Home from './component/Home';
import Navbar from './component/Navbar';
// import Surprise from './component/Surprise';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Contact from './component/Contact';
import Mainsurprise from './component/Mainsurprise';
import Gallery from './component/Gallery';
import Cartpage from './component/Cartpage';
import { ToastContainer } from 'react-toastify';
import BirthdaySurprise from './component/BirthdaySurprise';
import Signup from './component/Signup';
import Login from './component/Login';
import Gift from './component/Gift';
import axios from "axios"
import {useCart} from 'react-use-cart'
import { useEffect } from 'react';
import Details from './component/Details';

function App() {
    const {totalItems}=useCart();
    useEffect(()=>{
      setTimeout(async () => {
        const useremail = localStorage.getItem('Login');
        const cart=localStorage.getItem('react-use-cart');
        try {
          await axios.put(`https://localhost:7221/api/Event/updatecart/${useremail}`, cart, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log("Cart updated in DB.");
        } catch (err) {
          console.error("Failed to update cart in DB", err);
        }
      }, 200); 
    },[totalItems])
     
  return (
    <div >
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mainsurprise' element={<Mainsurprise />} />
          <Route path='/gallery' element={<Gallery />}/>  
          <Route path='/contact' element={<Contact/>}/>  
          <Route path='/cart' element={<Cartpage />}/> 
          <Route path='/birthday' element={<BirthdaySurprise />}/>  
          <Route path='/signup' element={<Signup />}/>  
          <Route path='/login' element={<Login />}/>  
          <Route path="/Gift" elememt={<Gift/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
