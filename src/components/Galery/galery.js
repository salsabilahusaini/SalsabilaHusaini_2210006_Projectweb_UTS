import React from 'react';
import'./galery.css';
import Galery1 from '../../assets/esa1.jpg';
import Galery2 from '../../assets/esa4.jpg';
import Galery3 from '../../assets/esa3.jpg';
import Galery4 from '../../assets/sama1.jpg';
import Galery5 from '../../assets/keluarga.jpg';
import Galery6 from '../../assets/sama2.jpg';


const Galery = () => {
  return (
    <section id='galery'>
        <h2 className="galerytitle">My Galery</h2>
        <span className="galeryDesc">Ini adalah foto saya dan orang-orang yang sangat saya sayangi dan berharga dihidup saya</span>
        <div className="galeryImgs">
            <img src={Galery1} alt="" className="galeryImg" />
            <img src={Galery2} alt="" className="galeryImg" />
            <img src={Galery3} alt="" className="galeryImg" />
            <img src={Galery4} alt="" className="galeryImg" />
            <img src={Galery5} alt="" className="galeryImg" />
            <img src={Galery6} alt="" className="galeryImg" />
        </div>
        <button className="galeryBtn">See More</button>
    </section>
  )
}

export default Galery;