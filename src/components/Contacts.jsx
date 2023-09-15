import React, { useRef, useState } from 'react';
import './Contacts.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiLogoGoogle } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const Contacts = () => {
  const onChange =() =>{}
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false); // State for showing message sent popup

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_at1dpz9', 'template_v242dgn', form.current, 'n4CEAGAIxuOJMj7vF')
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); 
       
          // Clear form fields
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      sendEmail(e);
    }
  };

  return (
    <div className="containerr" id="co">
      <h3 className="Conta"> Get in Touch..... </h3>
      <form ref={form} onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
            
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="MESSAGE..."
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <ReCAPTCHA
    sitekey="6Lc86SgoAAAAAAgQdq7q_M8LiK5xh8c5eKvJ7yN1"
    onChange={onChange}
  />,
        <button type="submit">Send</button>
      </form>
      
      {messageSent && <div className="popup">Message Sent</div>} 
      
      <div className="Rabali">
        <a href="https://github.com/Ntampul">
          <FaGithub size="3rem" color="white" class="social-icon" />
        </a>
  
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <BiLogoGoogle size="3rem" color="white" class="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mthunzi-ntampula-7b194522b/">
          <FaLinkedin size="3rem" color="white" class="social-icon" />
        </a>
        <a href="https://www.instagram.com/bhut_mthunz/">
          <FaInstagram size="3rem" color="white" class="social-icon" />
        </a>
      </div>
  
      <div className="copyright">
        &copy; 2023 Mthunzi Ntampula. All rights reserved.
      </div>
    </div>
  );
};

export default Contacts;