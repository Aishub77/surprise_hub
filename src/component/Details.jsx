import React from 'react'
import { useLocation } from 'react-router-dom'
import '../component/Details.css'
import axios from 'axios'
import Swal from 'sweetalert2'                                                         


const Details = () => {
    const loc = useLocation();
    const details = loc.state;
    console.log(details);
    const showAlert = () => {
        Swal.fire({
          title: 'Order Placed!',
          text: 'Check your email for details.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      };

    const userEmail = localStorage.getItem("Login"); 
    const orderData = {
        email: userEmail, // Replace with dynamic email from login/localStorage if needed
        items: [
          {
            title: details.title,
            price: details.price,
            quantity:details.quantity ,
            totalCost:details.quantity*details.price,
          },
        ],
      };
    
      const sendOrderEmail = async () => {
        
        try {
          const response = await axios.post("https://localhost:7221/api/Event/send-order", orderData);
        //   alert("Order email sent successfully!");
          showAlert();
        } catch (error) {
          console.error("Error sending email:", error);
          alert("Failed to send email.");
        }
      };
    





    // const handlePlaceOrder = async (details) => {
    //     const userEmail = localStorage.getItem("Login"); // Set this at login
    
    //     if (!userEmail) {
    //       alert("User not logged in.");
    //       return;
    //     }
    
    //     try {
    //       const response = await axios.post("https://localhost:7221/api/Event/send-order", {
    //         email: userEmail,
    //         items:details,
    //       });
    
    //       alert("Order placed successfully! Check your email.");
    //     } catch (error) {
    //       console.error("Error sending email:", error);
    //       alert("Failed to send order email.");
    //     }
    //   };

    // const loc = useLocation();
    // const details = loc.state;
    // console.log(details);
    return (
        <div className='details'>
            <div className="row  align-items-center">

                <div className="col-6 d-flex justify-content-center">
                    <img src={details.img} style={{ width: '400px', height: '400px' }} />
                </div>

                <div className="col-6">
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <h3>Title</h3>
                        </div>
                        <div className='col-2'>
                            <h3>:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>{details.title}</h3>
                        </div>

                        <div className='col-5'>
                            <h3>Price</h3>
                        </div>
                        <div className='col-2'>
                            <h3>:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>{details.price}</h3>
                        </div>

                        <div className='col-5'>
                            <h3>Quantity</h3>
                        </div>
                        <div className='col-2'>
                            <h3>:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>{details.quantity}</h3>
                        </div>
                        {/* <div className='line'>
                            <hr></hr>
                        </div> */}
                        <div className='col-5'>
                            <h3> Total Price</h3>
                        </div>
                        <div className='col-2'>
                            <h3>:</h3>
                        </div>
                        <div className='col-5'>
                            <h3>{details.quantity*details.price}</h3>
                        </div>
                        <div className='col-10 mt-5'>
                            <button onClick={()=>sendOrderEmail() }>Pay Now</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Details
