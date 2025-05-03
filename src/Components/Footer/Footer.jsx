import React from 'react'
import './Footer.css'
import { assets2 } from '../../assets/assets2'


const Footer = () => {
  return (
    <>
<div className='footer' id="footer">
<div className="footer-content">
    <div className="footer-content-left">
        <img className='footer-logo' src={assets2.logo1} alt="" />
        <p>Contact us for inquiries, support, or feedback. We're here to assist you anytime, anywhere.</p>
   <div className="footer-social-icons">
    <img src={assets2.twitter_icon} alt="" />
    <img src={assets2.insta2} alt="" />
    <img src={assets2.linkedin_icon} alt="" />

   </div>
   
    </div>

    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>

    <div className="footer-content-right">

        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91-26777-88888</li>
            <li>foodpedia@gmail.com</li>
        </ul>
    </div>

        </div>
        
<p className="footer-copyright">Copyright 2025 @ FoodPedia.com- All Right Reserved.</p> 
 
    </div>    
    </>
  )
}

export default Footer
