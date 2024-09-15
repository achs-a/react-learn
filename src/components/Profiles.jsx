import React from "react"
import image from '../assets/images/image.jpeg';

const profile = () => {
  return (

    <div className="profile text-center py-8">
            <img src="w.jpeg" alt="consolee" className="w-48 h-48 rounded-full mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4"><span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">I am IRANKUNDA,</span> frontend developerand designer from RWANDA.</h2>
            <p className="mb-4">I am a frontend developer and designer from Rwanda with 1 year of experience in multiple companies like AB, URUTI HUB, and KIGALI LABs.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="bg-gradient-to-r from-purple-800 to-pink-700 text-white px-4 py-2 rounded hover:bg-gradient-to-l">Connect With Me</a>
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded hover:bg-gradient-to-l">My resume</a>
            </div>
        </div>
  );
}

export default profile;