import React from 'react';
import gift from '../assets/purplebox.jpg';
import pol from '../assets/newpolaroid.webp';
import heart from '../assets/heartchain.jpeg';
import box from '../assets/hamper.jpg';
import photo from '../assets/photoframe.jpeg';
import cake from '../assets/bcake.jpg';
import '../component/Gift.css';
import { useCart } from 'react-use-cart';
import axios from "axios";
import {toast} from 'react-toastify'

const Gift = () => {
  const { addItem } = useCart();
 


  const notify=()=>{
    toast.success('Item Add to Cart',{
        position:"top-center",
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:false,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark"
    })
  }

  const data = [
    { id: 1, img: photo, title: 'Photo Frames', text: 'Cherish Every Moment', price: 300 },
    { id: 2, img: heart, title: 'Heart KeyChain', text: 'Love in Your Pocket', price: 799 },
    { id: 3, img: box, title: 'Gift Hamper', text: ' A Treasure of Love', price: 899 },
    { id: 4, img: gift, title: 'Explosion Giftbox', text: 'Unbox the Surprise', price: 799 },
    { id: 5, img: pol, title: 'Polaroids', text: 'Instant Memories, Forever.', price: 299 },
    { id: 6, img: cake, title: 'Cake', text: 'Sweeten the Celebration ', price: 599 }
  ];


const handleAddToCart = async (item) => {
  addItem(item); // Adds to cart
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
  notify(); 
};
 
   return (
    <div>
      <div className="container">
        <center><h2 className="gift">GIFTS 🎁</h2></center>
        <div className="row">
          {
            data.map((item) => (
              <div className="col-md-4 py-3" key={item.id}>
                <div className="card">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.text} <span className="price-text">Rs.{item.price}</span></p>
                    <button className="btn btn-secondary" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          }    
        </div>
      </div>
    </div>
  );
};

export default Gift;
