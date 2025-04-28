import React, { useEffect } from 'react'
import candle from '../assets/candlelight.jpeg'
import friend from '../assets/giftfriend.jpg'
import surprise from '../assets/cakesur.jpg'
import './Surprisepage.css'
import Footer from './Footer'
import Aos from "aos"
import "aos/dist/aos.css"
const Surprisepage = () => {
  useEffect(() => {
    Aos.init();
  })

  return (
    <div>
      {/* Section 1: Image Left, Content Right */}
      <div className="d-flex flex-column flex-md-row section" data-aos="fade-left">
        <div className="col-md-6 image-half"  style={{backgroundImage: `url(${candle})`,}}></div>
        <div className="col-md-6 content-half bg-light">
          <h2>CandleLight Dinner</h2>
          <p>"❤️ Create unforgettable moments with the warm glow of love! Surprise your special someone with a Candle Light Dinner Experience ✨. Perfect for anniversaries 💍, proposals 💕, birthdays 🎉, or just because! Let us help you craft a magical, intimate evening filled with romance and elegance. 💫"</p>
        </div>
      </div>

      {/* Section 2: Image Right, Content Left */}
      <div className="d-flex flex-column flex-md-row-reverse section" data-aos="fade-right" data-aos-delay="300">
        <div
          className="col-md-6 image-half"
          style={{ backgroundImage: `url(${friend})`, }} >
        </div>
        <div className="col-md-6 content-half bg-light">
          <h2>Surprise Your Friends</h2>
          <p>"Show your friends how much you care with the perfect gift from [Your Website Name] 🎁. Whether for a special occasion 🎉 or just because 💖, we offer a wide selection of thoughtful gifts to make every moment memorable ✨. Find something they'll cherish today! 💫"</p>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row section" data-aos="fade-left" data-aos-delay='500'>
        <div
          className="col-md-6 image-half"
          style={{ backgroundImage: `url(${surprise})`, }} >
        </div>
        <div className="col-md-6 content-half bg-light">
          <h2>Birthday Surprise</h2>
          <p>"Make your friend's birthday extra special with the perfect surprise from "Surprise Hub"🎉! Whether it’s a unique gift 🎁, a fun experience 🎈, or a personalized touch 💖, we have everything to create unforgettable moments. Celebrate their big day in style and make it one they’ll never forget! Explore our birthday surprises now and let the celebrations begin! 🎂✨"</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Surprisepage
