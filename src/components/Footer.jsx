import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
        <p className="text-xl font-bold mb-2">AleX</p>
        <p className="mb-4">I am a frontend developer from USA with 10 years of experience in companies like Microsoft, Tesla, and Apple.</p>
        <div className="subscribe mb-4">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-300 rounded-l" />
            <button type="button" className="bg-gradient-to-r from-purple-800 to-pink-700 text-white px-4 py-2 rounded-r hover:bg-gradient-to-l">Subscribe</button>
        </div>
        {/* <div className="mb-4"> */}
        <div className="footer-links">
            <p>&copy; 2023 Alex Bennett. All rights reserved.</p>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
</footer>
  );
}

export default Footer;