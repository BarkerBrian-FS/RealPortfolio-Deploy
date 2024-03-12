import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import spaceBg2 from '../images/spaceBg2.jpg'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_stmew67', 
        'template_4h54lr8', 
        form.current, {
        publicKey: 
        'huqTxf4ikvWEbKvV6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <form ref={form} onSubmit={sendEmail} style={style.form}>
        <div style= {style.name}>
          <label>Name</label>
          <div><input type="text" name="user_name" /></div>
        </div>
        <div style= {style.email}>
          <label>Email</label>
          <div><input type="email" name="user_email" /></div>
        </div>
        <div style= {style.message}>
          <div>
            <label>Message</label>
          </div>
            <textarea name="message" />
        </div>
        <div class='submitBtn'><input type="submit" value="Send" /></div>
      </form>
  );
};

export default ContactForm

const style = {
  form:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '570px',
    marginTop: '100px',
    borderRadius: '3px',
    height: '600px'
  },
  name:{
    marginTop: '60px',
    color: 'white'
  },
  input:{
  },
  email:{
    marginTop: '15px',
    color: 'white'
  },
  message:{
    marginTop: '15px',
    color: 'white'
  }
}