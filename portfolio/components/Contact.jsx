import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const SERVICE_ID = 'service_wj99zi2'
  const TEMPLATE_ID = 'template_4rqkjcc'
  const PUBLIC_KEY ='rK8bCv7Jvp33cx9sG'
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='w-screen h-screen pt-20 max-sm:hidden flex flex-col items-center'>
        <h3 className='font-barlow text-3xl'>CONTACT</h3>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col p-7 items-center w-11/12 max-sm:hidden'>
        <label className='font-barlow text-2xl'>NAME</label>
        <input type="text" name="user_name" className='input input-bordered w-full max-w-xs h-[30px] bg-opacity-50'/>
        <label className='pt-4 font-barlow text-2xl'>EMAIL</label>
        <input type="email" name="user_email" className='input input-bordered w-full max-w-xs h-[30px] bg-opacity-50' />
        <label className='pt-4 font-barlow text-2xl'>MESSAGE</label>
        <textarea name="message" className='textarea textarea-bordered w-full bg-opacity-50'/>
        <input type="submit" value="SEND" className='btn mt-5 px-14 bg-opacity-50' />
        </form>
    </div>
  );
};

export default Contact