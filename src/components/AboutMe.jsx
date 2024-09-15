import React from 'react'

const AboutMe = () => {
  return (
    <>
  <section className="about-me py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
        </section>
        <div className="about-container flex items-center justify-center py-8">
            <img src="w.jpeg" alt="Sabo" className="w-48 h-48 rounded-full mr-8" />
            <div className="about-details text-left">
                <p className="mb-4">I am an experienced Frontend Developer and designer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p className="mb-4">My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                <div className="skills">
                    <div className="skill mb-4">
                        <span className="block text-lg font-medium mb-1">HTML & CSS</span>
                        <div className="w-full bg-gray-300 h-2 rounded">
                            <div className="bg-blue-600 h-2 rounded w-3/4"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <span className="block text-lg font-medium mb-1">React JS</span>
                        <div className="w-full bg-gray-300 h-2 rounded">
                            <div className="bg-green-600 h-2 rounded w-2/3"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <span className="block text-lg font-medium mb-1">Javascript</span>
                        <div className="w-full bg-gray-300 h-2 rounded">
                            <div className="bg-yellow-600 h-2 rounded w-4/5"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <span className="block text-lg font-medium mb-1">Next JS</span>
                        <div className="w-full bg-gray-300 h-2 rounded">
                            <div className="bg-purple-600 h-2 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="statistics flex justify-around py-8">
            <div className="stat text-center">
                <span className="text-4xl block mb-2">10+</span>
                <p>Years of Experience</p>
            </div>
            <div className="stat text-center">
                <span className="text-4xl block mb-2">90+</span>
                <p>Projects Completed</p>
            </div>
            <div className="stat text-center">
                <span className="text-4xl block mb-2">15+</span>
                <p>Happy Clients</p>
            </div>
        </div>
    </>
  );
}

export default AboutMe