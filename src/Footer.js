import React from 'react'
import "./Footer.css"
import subscribe from "./images/Subscribe.png"
import insta from "./images/insta.png"
import linkedin from "./images/linkedin.png"
import gpay from "./images/gpay.png"
import mastercard from "./images/mastercard.jpg"
import paypal from "./images/paypal.png"
import amex from "./images/amex.png"
import applepay from "./images/applepay.png"
import qpay from "./images/Qpay.png"
import usa from "./images/usa.png"


function Footer() {
  return (
    <div className='footer'>
    <div className='top-footer'>
    <div className='left-top'>
    <h3>BE THE FIRST TO KNOW</h3>
    <p>Sign up for updates from mettā muse.</p>
    <img src={subscribe} alt="input-box"/>
    </div>
    <div className='right-top'>
    <h3>CONTACT US</h3>
    <div>
    <p>+44 221 133 5360</p>
    <p>customercare@mettamuse.com</p></div>
    <h3>CURRENCY</h3>
    <div style={{display:"flex", alignItems:"center", gap:"8px"}}><img style={{width:"24px", height:"24px", marginTop:"24px"}}src={usa} alt="usaIcon"/>  <h3>USD</h3></div>
  
    <div className='transaction'>Transactions will be completed in Euros and a currency reference is available on hover.</div>
    </div>
 
    </div><hr/><div className='bottom-footer'>
    <div className='bottom-left'>
    <h3>mettā muse</h3>
    <p>About Us</p>
    <p>Stories</p>
    <p>Artisans</p>
    <p>Boutiques</p>
    <p>Contact Us</p>
    <p>EU Complainces Docs</p>
    </div>
    <div className='bottom-mid'>
    <h3>Quick Links</h3>
    <p>Orders & Shipping</p>
    <p>Join/Login as a Seller</p>
    <p>Payment & Pricing</p>
    <p>Return & Refunds</p>
    <p>FAQs</p>
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    </div>
    <div className='bottom-right'>
    <h3>Follow Us</h3>
    <div className='social-handles'>
    <div>
    <img src={insta} alt="insta"/>
    </div>
    <div>  <img src={linkedin} alt="linkedin"/></div>
    </div>
    <div className='paymentMethods'>
    <h3>mettā muse Accepts</h3>
     <div style={{display:"flex",gap: "5px"}}>
     <img src={gpay} alt="gpay"/>
     <img src={mastercard} alt="mastercard"/>
     <img src={paypal} alt="paypal"/>
     <img src={amex} alt="amex"/>
     <img src={applepay} alt="applepay"/>
     <img src={qpay} alt="qpay"/>
     </div>
    </div>
    </div>
    </div>
    <div className='copyright' style={{textAlign:"center"}}>
    <p style={{textAlign:"center"}}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer