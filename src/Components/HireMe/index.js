import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';
import TransitionEffect from '../TransitionEffect';

export const HireMe = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_htbigvs', 'template_cye7w59', form.current, {
        publicKey: 'rswOP3EEh5WwO83xQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
          setError(null);
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSent(false);
          setError('Failed to send email. Please try again later.');
        },
      );
  };

  return (
    <>
    <TransitionEffect/>
    <form ref={form} onSubmit={sendEmail} className='form-container'>
      <div className='input-container'>
        <label htmlFor="user_name" className='label'>Name</label>
        <input type="text" name="user_name" id="user_name" className='text-email-input' placeholder='Enter Your Name' />
      </div>
      <div className='input-container'>
        <label htmlFor="user_email" className='label'>Email</label>
        <input type="email" name="user_email" id="user_email" className='text-email-input' placeholder='Enter Your Email' />
      </div>
      <div className='input-container'>
        <label htmlFor="message" className='label'>Message</label>
        <textarea name="message" id="message" cols={49} rows={10} className='message-input' placeholder='Enter Your Message'/>
      </div>
      {sent && <p className="success-msg">Email sent successfully!</p>}
      {error && <p className="error-msg">{error}</p>}
      <input type="submit" value="Send" className='send-btn' />
    </form>
    </>
  );
};

export default HireMe;
