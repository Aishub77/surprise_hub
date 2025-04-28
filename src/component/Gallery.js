import React from 'react';
import img1 from '../assets/partnersurprise.jpg';
import img2 from '../assets/wed.jpg';
import img3 from '../assets/bsurprise.jpg';
import flower from "../assets/gallery home.jpg";
import './Gallery.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const cards = [
    { id: 1, title: 'BIRTHDAY SURPRISE', subtitle:'SURPRISE', img: img3 ,price:7000,Items:[
      "🎉 Golden balloons with LED lights",
      "📄 Generic Greeting Card (A4, Occasion Based)",
      "🌹 10 Red Roses in a Bouquet",
      "🍰 Complimentary 500g Choco Truffle Cake",
      "🎵 Background music via Bluetooth speaker",
  ]},
    { id: 2, title: 'SURPRISE PARTNER',  subtitle:'SURPRISE',img: img1 ,price:7999,Items:[
      "💍 Ring Box with Spotlight Effect",
      "🌹 Heart-shaped rose arrangement",
      "🎈 Marry Me LED marquee letters",
      "🎥 Professional candid photography",
      "🎶 Romantic playlist via Bluetooth speaker",
  ]},
    { id: 3, title: 'ANNIVERSARY SURPRISE',subtitle:'SURPRISE',img: img2,price:5999,Items:[
      "💑 Customized photo collage frame",
      "🎂 Designer 1kg Heart-Shaped Cake",
      "🕯️ Candlelight dinner table setup",
      "🎁 Personalized couple gift box",
      "🎻 Violinist live performance (optional)",
  ]},
  ];

  const navigate = useNavigate();
  const handleImageClick = (card) => {
    navigate('/birthday',{ state:card}); // this navigates to BirthdaySurprise component
  };
  return (
    <div className="container-fluid gallery-wrapper">
      {/* Hero Section */}
      <div className="row hero-container align-items-center">
        <div className="col-md-6 hero-content">
          <h1>
            Make your<br />Celebrations<br /><span>Unforgettable</span>
          </h1>
          <p>
            People trust us with their grandest celebrations.<br />
            Sit back, let Surprise Hub curate your occasion for you!
          </p>
          <Link to='/contact'><button className="hero-button btn btn-dark">Plan a Surprise</button></Link>
        </div>
        <div className="col-md-6 hero-image">
          <img src={flower} alt="Proposal" className="img-fluid rounded" />
        </div>
      </div>

      {/* Custom Image Cards */}
      <div className="row card-row mt-5 justify-content-center">
        {cards.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="custom-image-card">
              <img src={card.img} alt={card.title} className="card-image" onClick={()=>handleImageClick(card)}/>
              <div className="card-text-overlay">
                <p className="subtitle">{card.subtitle}</p>
                <h5 className="title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
