import { useRef } from 'react';
import emailjs from '@emailjs/browser'; 

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const message = formData.get('message');

    if (!userName || !userEmail || !message) {
      alert('Please fill in all fields.');
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
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div id='contact' className="main-container py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Contact Me
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Let's Chat.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I am currently open to full-time opportunities and freelance projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  href: 'mailto:abhi77678842@gmail.com', 
                  icon: 'fa-envelope', 
                  label: 'Email',
                  text: 'abhi77678842@gmail.com' 
                },
                { 
                  href: 'https://wa.me/917767884217', 
                  icon: 'fa-whatsapp', 
                  label: 'WhatsApp',
                  text: '+91 7767884217' 
                },
                { 
                  href: 'tel:7767884217', 
                  icon: 'fa-phone', 
                  label: 'Phone',
                  text: '+91 7767884217' 
                },
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  target='_blank' 
                  rel='noopener noreferrer'
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <i className={`fa-solid ${contact.icon} text-xl`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {contact.text}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600">Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600">Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600">Message</label>
                <textarea 
                  name="message" 
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-200 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;