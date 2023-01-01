import React from 'react'
import Footer from '../Footer'
import './Contact.css'
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <>
    <div class="bod">
      <div class="link">
        <div class="im">
          <img src="https://cdn.pixabay.com/photo/2020/11/10/22/28/contact-us-5731121_1280.png"></img>
        </div>
        <div class="info">
          <p><a href=""><img src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"/>  JerseyShop</a></p>
          <p><a href=""><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000"/>   JerseyShop</a></p>
          <p><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqub4gve8fWr84M-Swd-kaW2-Fx4f4BcBY5MNb5s-57iDYqIwkCDIfZuAjctlh82Ryf9U&usqp=CAU"/>   JerseyShop</a></p>
          <p><a href=""><img src="https://thumbs.dreamstime.com/b/email-icon-isolated-white-background-email-icon-trendy-design-style-email-icon-isolated-white-background-email-icon-183701610.jpg"/> moin19711@outlook.com</a>
          </p>
        </div>
      </div>
      <div class="or">
        <div class="ib">
          <h3>Visit US</h3>
          <p>2C, B.K Heights,Road No-05, Shamolchaya, R/A</p>
          <p>Textile Industrial Area,</p>
          <p>Bayezid, Chattogram</p>
          <p>Post Code-3910</p>
        </div>
        <div class="pl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdXUzFeLiv78kZnrfcPQ14pPg-FP88_vB7JahAJ3yj7ZIXZLttC1ncoxkFwOqMQ6qHpk&usqp=CAU"></img>
        </div>
      </div>
      <div class="em">
        
        <div class="in">
          <img src="https://www.malariaconsortium.org/gallery-image/width-1280/07210149-42-emailicon.png"/>
        </div>
        <div class="Write">
           <h3>Write to us</h3>
           <form>
         
         
	            <p> <b><label>Name :&nbsp;</label></b>
                <input type="text" name="name" required=""/></p>
	            <br/>
	            <p><b><label>E-mail :&nbsp;</label></b>
	            <input type="text" name="example@gmail.com" required=""/></p>
	            <br/>
	            <p><b><label>Message :&nbsp;</label></b>
	            <input type="textarea" name="msg" required=""/></p>
	            <br/>
	            <Button variant="success">Send Your Message</Button>
              </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default Contact
