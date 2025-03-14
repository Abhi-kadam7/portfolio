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
    <div id='contact' className="main-container p-6 bg-gray-100 animate-fadeIn">
      <h1 className="py-8 font-bold text-4xl underline text-center animate-fadeInUp">
        Contact
      </h1>

      <div className="container-1 flex flex-col lg:flex-row">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex justify-center pb-8 animate-slideInLeft">
          <div className="w-full lg:w-2/3 space-y-3 bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold pt-2">GET IN TOUCH</h2>
            <p className='text-lg text-gray-700'>
              Hello! Thank you for visiting my site.
              If you have any questions, comments, or just want to reach out, please use the form below to send me a message.
              I look forward to hearing from you!
            </p>

            <div className="icon-container space-y-3 pt-3">
              {[
                { href: 'mailto:abhi77678842@gmail.com', icon: 'fa-envelope', text: 'abhi77678842@gmail.com' },
                { href: 'https://wa.me/917767884217', icon: 'fa-whatsapp', text: '7767884217' },
                { href: 'tel:7767884217', icon: 'fa-address-book', text: '7767884217' },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <a 
                    href={contact.href} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className="cursor-pointer border hover:bg-orange-600 px-4 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800 text-white transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                  >
                    <i className={`fa-solid ${contact.icon} text-xl`}></i>
                  </a>
                  <a 
                    href={contact.href} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className="cursor-pointer font-semibold text-lg text-gray-800 hover:text-orange-500 transition-all duration-300"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 pb-8 animate-slideInRight">
          <div className='flex justify-center'>
            <div className="w-full lg:w-2/3 bg-white rounded-xl p-6 shadow-lg">
              <h1 className='text-2xl font-semibold pt-2 text-center'>Message me...!</h1>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                <label className='text-lg font-semibold text-gray-800'>Name:</label>
                <input 
                  type="text" 
                  name="user_name" 
                  className='text-lg p-2 outline-none border-2 border-gray-300 rounded focus:border-orange-500 transition-all duration-300' 
                />
                
                <label className='text-lg font-semibold text-gray-800'>Email:</label>
                <input 
                  type="email" 
                  name="user_email" 
                  className='text-lg p-2 outline-none border-2 border-gray-300 rounded focus:border-orange-500 transition-all duration-300' 
                />
                
                <label className='text-lg font-semibold text-gray-800'>Message:</label>
                <textarea 
                  name="message" 
                  className='text-lg p-2 outline-none border-2 border-gray-300 rounded focus:border-orange-500 transition-all duration-300 resize-none h-24' 
                />

                <button 
                  type="submit" 
                  value="send" 
                  className="py-2 px-5 bg-orange-500 text-white rounded-full text-xl shadow-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
