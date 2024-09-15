import React from 'react'

const Work = () => {
  return (
    <>
    <section className="services py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">My Services</h2>
        </section>
        <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            <div className="service-box bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">01</h3>
                <h4 className="text-xl font-semibold mb-2">Web design</h4>
                <p className="mb-2">Web development is the process of building, programming...</p>
                <a href="#" className="text-purple-500 hover:underline">Read more →</a>
            </div>
            {/* <!-- Repeat for other service-box items --> */}
        </div>
        <h2 className="text-2xl font-bold text-center py-8">My Latest Work</h2>
        <div className="work-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
            <img src="bby.png" alt="Work 1" className="w-full h-auto object-cover" />
            {/* <!-- Repeat for other images --> */}
        </div>
        <button className="bg-gradient-to-r from-purple-800 to-pink-700 text-white px-6 py-2 rounded hover:bg-gradient-to-l mx-auto block">Show More →</button>
  
</>
  )
}

export default Work;