
import { useState } from 'react';
import './Contacts.css';
import { FaGithub, FaLinkedin,FaInstagram  } from "react-icons/fa";
import { BiLogoGoogle  } from "react-icons/bi";

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Here, you can perform actions like sending the form data to a server
      // using APIs or displaying a success message.
      console.log('Form submitted:', { name, email, message });
    }
  };

  return (
    
    <div className='container' id='contacts'>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="Rabali">
        <a href="https://github.com/Ntampul">
          <FaGithub size= '3rem' color='white'/> 
        </a>

        <a href="https://mail.google.com/mail/u/0/#inbox">
            <BiLogoGoogle size='3rem' color='white'/>
        </a>
        <a href='https://www.linkedin.com/in/mthunzi-ntampula-7b194522b/'>
          <FaLinkedin size='3rem' color="white"/>
        </a>
        <a href='https://www.instagram.com/bhut_mthunz/'>
          <FaInstagram size='3rem' color='white'/>
        </a>

        
        {/* Add more icons as needed */}
      </div>
      <p className="copyright">©2023 MTHUNZI NTAMPULA. All rights reserved.</p>
    </div>
  );
};

export default Contacts;
