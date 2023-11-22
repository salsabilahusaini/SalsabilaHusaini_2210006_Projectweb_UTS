import React, { useRef } from 'react';
import './contact.css';
import WA from '../../assets/wa.png';
import IG from '../../assets/ig.png';
import Twitter from '../../assets/twitter.png';
import Tiktok from '../../assets/tiktok.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1foxyns', 'template_ich5vta', form.current, '779UPQoooGbpKAErA88XQN')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent !');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      }
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Jalur silaturahmi</span>
            <form className='contactForm' ref={form}onSubmit={sendEmail} >
                <input type="text" className="name"placeholder='Your Name' name='your_name' />
                <input type="email" className="email"placeholder='Your Email' name='your_email' />
                <textarea className='msg'name="message"rows="5"placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                <a href="http://wa.me/6282171825925">
                <img src={WA} alt="wa" className="link" />
                </a>
                <a href="https://www.instagram.com/slsblhusaini/">
                <img src={IG} alt="ig" className="link" />
                </a>
                <a href="https://twitter.com/slsblhusaini?t=jVwFIh431powNKRgJ-Suug&s=01">
                <img src={Twitter} alt="twitter" className="link" />
                </a>
                <a href="https://www.tiktok.com/@slsblhusaini?is_from_webapp=1&sender_device=pc">
                <img src={Tiktok} alt="tiktok" className="link" />
                </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;