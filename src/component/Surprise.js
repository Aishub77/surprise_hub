import React from 'react'
import shome from '../assets/marryme.jpg'
// import bride from '../assets/black.jpg'
import event from '../assets/Wedding.png'


const Surprise = () => {
  return (
    <div>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        <div className='car-content 'style={{position:'absolute', bottom:'60px', fontFamily:'Allura',
color:'white',fontSize:'50px',gap:'10px'}}>
            <p>"Crafting Memories with a Twist !"</p>
          </div>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        
          {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button> */}
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={event} alt="Los Angeles" class="d-block w-100" style={{ height: '700px', width: '75px' }} />
          </div>
          <div class="carousel-item">
            <img src={shome} alt="Chicago" class="d-block w-100" style={{ height: '700px' }} />
          </div>
        
          {/* <div class="carousel-item">
            <img src={bride} alt="Chicago" class="d-block w-100" style={{ height: '650px' }} />
          </div> */}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default Surprise