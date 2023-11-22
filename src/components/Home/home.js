import React from 'react';
import './home.css';
import bg from '../../assets/esaa.png';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <section id="home">
        <div className="homeContent">
            <span className="hello">Hello,</span>
            <span className="homeText">I'm <span className="homeName">Salsabila Husaini</span> <br/>Mahasiswa</span>
            <p className="homePara">Manusia yang senantiasa haus akan pengetahuan dan pengalaman baru</p>
            <Link><button className="btn">Selengkapnya</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Home;