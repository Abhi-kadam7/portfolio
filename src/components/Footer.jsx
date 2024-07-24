import { useRef } from 'react';
import emailjs from '@emailjs/browser'; // npm i '@emailjs/browser'

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    if (!userName || !userEmail || !message) {
      alert('Please add Name, Email, and Message.');
      return;
    }

    emailjs
      .sendForm('service_pk7m55i', 'template_rk58l9c', form.current, 'Yn7XbxPq2_nFp3-ZS')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id='contact' className="main-container p-4">
        <h1 className="py-8 font-bold text-4xl underline text-center">Contact</h1>
        <div className="container-1 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex justify-center pb-8">
            <div className="w-full lg:w-2/3 space-y-3 bg-gray-200 rounded-xl p-4 shadow-xl">
              <h2 className="text-2xl font-semibold pt-2">GET IN TOUCH</h2>
              <p className='text-lg'>Hello! Thank you for visiting my site.
                 If you have any questions, comments, or just want to reach out, please use the form below to send me a message.
                  I look forward to hearing from you!
</p>
              <div className="icon-container space-y-3 pt-3">
                <div className="flex items-center">
                  <a className='cursor-pointer border hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-800 text-white'>
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  <a href='mailto:abhi77678842@gmail.com'target='_blank' className="cursor-pointer pl-4 font-semibold text-lg">abhi77678842@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <a className='cursor-pointer border hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-800 text-white'>
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href='https://wa.me/917767884217'target='_blank' className=" cursor-pointer pl-4 font-semibold text-lg">7767884217</a>
                </div>
                <div className="flex items-center">
                  <a className='cursor-pointer border hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-800 text-white'>
                    <i className="fa-solid fa-address-book"></i>
                  </a>
                  <a href='tel:7767884217'target='_blank' className="pl-4 font-semibold text-lg">7767884217</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pb-8">
            <div className='flex justify-center'>
              <div className="w-full lg:w-2/3 bg-gray-200 rounded-xl p-4 shadow-xl">
                <h1 className='text-2xl font-semibold pt-2 text-center'>Message me...!</h1>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                  <label className='text-lg font-semibold'>Name:</label>
                  <input type="text" name="user_name" className='text-lg outline-none border-2 border-black rounded focus:border-black' />
                  <label className='text-lg font-semibold'>Email:</label>
                  <input type="email" name="user_email" className='text-lg outline-none border-2 border-black rounded focus:border-black' />
                  <label className='text-lg font-semibold'>Message:</label>
                  <textarea name="message" className='text-lg outline-none border-2 border-black rounded focus:border-black' />
                  <button type="submit" value="send" className="py-1 px-3 bg-orange-500 rounded-full text-xl shadow-lg font-semibold outline">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
