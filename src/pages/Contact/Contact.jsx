import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import image7 from "../../assets/Tesla_Contact.jpeg";
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <NavBar/>
            <div className="contact-container">
                <img src={image7} className="background fade-in" alt="Tesla Cybertruck" />
                <div className="contact-details">
                    <h1>Contact Us About the Tesla Cybertruck</h1>
                    <p>If you have any questions or need further information, please reach out to us using the form below or via our contact details.</p>
                    
                    <form className="contact-form">
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Message:
                            <textarea name="message" required></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>

                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Email: support@tesla.com</p>
                        <p>Phone: +1-800-123-4567</p>
                        <p>Address: 3500 Deer Creek Road, Palo Alto, CA 94304</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;