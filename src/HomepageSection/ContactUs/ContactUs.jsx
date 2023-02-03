import React from 'react'
import './contact.css'

const ContactUs = () => {
  return (
    <>
    <section id="contact-us" data-scroll-section>
     <div className="contact-us-container">
     <div className="contact-us-content">
        <div className="contact-us-left">
           <div className="contact-us-left-infocard">
            <h2><b>REQUEST A CALL BACK</b></h2>
            <p>If you are interested to know more about our plans, our team members are keen to speak with you about the question you have in your mind. Fill the request a call back form and our team members will call you as soon as possible.</p>
            <p><strong>Call Us</strong> for imiditate support this number</p>
            <p className='phone-number'><b>+92 305 5000083</b></p>
           </div>
        </div>
        <div className="contact-us-right">
            <div className="contact-us-right-content">
                <div className="form-heading">
                <h3><b>DROP YOUR MESSAGE</b></h3>
                </div>
                <div className="contact-us-form">
                    <form action="">
                        <label htmlFor="">
                            <input type="text" name='First Name' placeholder='First Name' id='firstName'/>
                        </label>
                        <label htmlFor="">
                            <input type="text" name='Last Name' placeholder='Last Name' id='lastName'/>
                        </label>
                        <label htmlFor="">
                            <input type="email" name='email' placeholder='Email' id='Email'/>
                        </label>
                        <label htmlFor="">
                            <input type="number" name='Number' placeholder='Number' id='Number'/>
                        </label>
                        <label htmlFor="">
                            <textarea name="Message" id="Message" cols="30" rows="3" placeholder='Message' required>

                            </textarea>
                        </label>
                    </form>
                </div>
            </div>
        </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default ContactUs