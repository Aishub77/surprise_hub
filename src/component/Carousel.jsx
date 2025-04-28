import React, { useEffect } from 'react'
import Gvideo from "../assets/Givideo.mp4"
import '../component/Carousel.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Carousel = () => {

  useEffect(() => {
    Aos.init();
  })

  return (
    <div>
      <div className='imagecon container-fluid'>
          <video autoPlay muted loop style={{height:'100vh',width:'100%',objectFit:'fill'}}>
            <source src={Gvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

  
      </div>
      <div className='imgcontent' data-aos="zoom-in">
        <p>"We create unforgettable experiences with seamless planning, creative details, and flawless execution.</p>
        <p className='p1'> Every event, perfectly crafted to impress."</p>
      </div>
    </div>
  )
}

export default Carousel
