import React from 'react';
import './about.css';
import Me from '../../assets/essyaaa.jpg';
import Education from '../../assets/education.png';
import More from '../../assets/more.png';

const About = () => {
  return (
    <section id='about'>
        <span className="aboutTittle">Introduction</span>
        <span className="aboutDesc">Halloo Welcome To My Website, kalian bisa panggil aku Esa. Aku berasal dari Sumatera Barat. Aku anak pertama dari dua bersaudara. Aku seorang mahasiswa di Universitas Pendidikan Indonesia. Mari jalin koneksi dan bagikan cerita-cerita inspiratif bersama!". Salam kenal dari akuu  </span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src={Me} alt="Me" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>Me</h2>
                    <p>Kegiatan aku sehari-hari kuliah seperti mahasiswa pada umumnya.<br/> Ketika libur aku mengerjakan tugas, drakoran, atau main keluar agar tidak bosen di rumah.<br/>Aku juga nonton youtube tentang masak, make up, olahraga, tips-tips biar produktif dll.</p>    
                </div>
            </div>
            <div className="aboutBar">
                <img src={Education} alt="Education" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>Education</h2>
                    <p>SD di SDN 15 Tarung-Tarung</p>  
                    <p>SMP/MTsN di MTsN 1 Pasaman</p>
                    <p>SMA/MAN di MAN 2 Bukittinggi</p>  
                </div>
            </div>
            <div className="aboutBar">
                <img src={More} alt="More" className="aboutBarImg" />
                <div className="aboutBarText">
                    <h2>More</h2>
                    <p>Aku hobby berolahraga, traveling, makeup, kuliner, dan bernyanyi.<br/>Makanan dan minuman yang aku suka yaitu kebab, roti bakar, durian, salad buah dan coffe.</p>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;