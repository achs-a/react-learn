import React from 'react'

const Message = () => {
  return (
    <>
      <section className="contact py-8">
        <div className="left text-center mb-4">
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="mb-2">Let's talk</p>
            <p className="mb-4">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
            <div className="contact-details">
                <p className="mb-1">greatstackdev@gmail.com</p>
                <p className="mb-1">+772-825-524</p>
                <p>CA, United States</p>
            </div>
        </div>
        <div className="right">
            <form id="myForm" className="max-w-md mx-auto">
                <label htmlFor="name" className="block text-left mb-2">Your Name:</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full px-3 py-2 mb-4 border border-gray-300 rounded" />

                <label htmlFor="email" className="block text-left mb-2">Your Email:</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" className="w-full px-3 py-2 mb-4 border border-gray-300 rounded" />

                <label htmlFor="message" className="block text-left mb-2">Write your message here:</label>
                <textarea id="message" name="message" required placeholder="Enter your message" className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"></textarea>

                <button type="submit" className="bg-gradient-to-r from-purple-800 to-pink-700 text-white px-6 py-2 rounded hover:bg-gradient-to-l">Submit now</button>
            </form>
        </div>
    </section>


  </>
  );
}

export default Message;