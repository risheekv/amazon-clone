import React from 'react'
import "./Home.css";
import Product from './Product'


function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
      </div>
      <div className="home__row">
        <Product id="1" title="SITMOD Gaming Chairs for Adults with Footrest-PC Computer Ergonomic Video Game Chair" price={179} image="https://m.media-amazon.com/images/I/71Tqnaj-lbL._AC_SX679_.jpg" rating={5}/>
        <Product id="2" title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller" price={25.99} image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg" rating={4}/>
        <Product id="3" title="Apple iPhone 15 Pro Max (256 GB) - Black Titanium" price={1299.99} image="https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg" rating={5}/>
      </div>
      <div className="home__row">
        <Product id="4" title="NIKE Mens Revolution 7 EasyonRunning Shoe" price={43.99} image="https://m.media-amazon.com/images/I/71FvP47vBtL._SL1500_.jpg" rating={5}/>
        <Product id="5" title="Smart Watch(Answer/Make Call), 1.85' Smartwatch for Women IP68 Waterproof" price={34.99} image="https://m.media-amazon.com/images/I/7104SkxvhXL._AC_SX679_.jpg" rating={4}/>
        <Product id="6" title="Apple 2023 MacBook Air laptop with M2 chip" price={1399.99} image="https://m.media-amazon.com/images/I/81xW62KXNhL._SX679_.jpg" rating={5}/>
        <Product id="7" title="Arctic Fox Slope Anti Theft 23 L Backpack with USB Charging Port 15 Inch Laptop Backpack (Marble Black)" price={21.99} image="https://m.media-amazon.com/images/I/61y5mUKvMdL._SL1500_.jpg" rating={5}/>     
      </div>
      <div className="home__row">
      <Product id="8" title="Hisense 305 cm (120 inches) Trichrom ALR Screen Series 4K Ultra HD Smart Laser TV 120L9HE (Black)" price={6097.99} image="https://m.media-amazon.com/images/I/916W567jPSL._SX679_.jpg" rating={5}/>
      <Product id="9" title="Wakefit Sofa Set for Living Room | 1 Year Warranty | Sofa, 3 Seater Sofa, Sofa Set, Wooden Sofa Set for Living Room, Couch Sofa for Living Room" price={299.99} image="https://m.media-amazon.com/images/I/312I5++2v5L._SY300_SX300_.jpg" rating={4}/>
      </div>
    </div>
  )
}

export default Home
