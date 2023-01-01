import React from 'react'
import './Footer.css'
import logo from "../img/logo1.png"


export default function Footer() {
  return (
    <footer>
    <div class="foot">
    <div class="work">
    <img src={logo} alt = "logo" style={{ width: '72px' }}></img><b>JerseyShop</b>
    <p>We provide your favourite jersey at best price with highest quality. Shop with us.</p>
    </div>
    <div class="social">
      <h3>Connect with us</h3>
      <p><a href=""><img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"/>  facebook.com/JerseyShop</a></p>
        <p><a href=""><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000"/>   Instagram/JerseyShop</a></p>
        <p><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqub4gve8fWr84M-Swd-kaW2-Fx4f4BcBY5MNb5s-57iDYqIwkCDIfZuAjctlh82Ryf9U&usqp=CAU"/>   Twitter/JerseyShop</a></p>
        <p><a href=""><img src="https://thumbs.dreamstime.com/b/email-icon-isolated-white-background-email-icon-trendy-design-style-email-icon-isolated-white-background-email-icon-183701610.jpg"/> moin19711@outlook.com</a>
      </p>
    </div>
  
  <div class="address">
      <h3>Visit Us</h3>
      <p>2C, B.K Heights,Road No-05, Shamolchaya, R/A</p>
        <p>Textile Industrial Area,</p>
        <p>Bayezid, Chattogram</p>
        <p>Post Code-3910</p>
    </div>
    


    <div class="email">
      <h3>Subscribe Our Newsletter</h3>
      <p>To get the latest news about us press</p>
      <form class="row g-2">
        <div class="col-sm-6 md-3">
          <label for="inputPassword2" class="visually-hidden"></label>
          <input type="email" class="form-control" id="inputPassword2" placeholder="moin@gmail.com"/>
        </div>
        <br/>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Subscribe</button>
        </div>
      </form>
      <p>Get Support 24/7 : <a href="telto:+8801537460805">01537460805</a></p>
    </div>
    </div>
    
    <div class="end"><p>&copy; Developed BY C201023 C201038 C201042 2022</p></div>
    </footer>
  );
}