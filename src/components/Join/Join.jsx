import React, { useRef } from 'react';
import "./Join.css";
// import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  // Email sending logic - currently commented
  /*
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  */

  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> with us?</span>
        </div>
      </div>

      <div className='right-j'>
        {/* Email form - static for now */}
        <form 
          ref={form}
          // onSubmit={sendEmail} 
          className='email-container'
        >
          <input 
            type='email' 
            name='user_email' 
            placeholder='Enter Your Email address' 
          />
          <button 
            className='btn btn-j' 
            type='submit'
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
