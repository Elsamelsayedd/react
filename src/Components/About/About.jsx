import React from 'react'

export default function About() {

  document.title='About'

  return (
    <>
      <section className='home bg-[#1ABC9C] text-white py-56'>
    <div className="container mx-auto flex justify-center items-center flex-wrap text-center">
      <div className="home-content w-full">
        
       

        <h2 className=' text-[40px] font-bold mb-[16px] pt-4'>ABOUT COMPONENT</h2>

        <div className="mark  flex items-center justify-center space-x-2 mb-4">
          <div className="left w-[80px] h-1 bg-white "></div>
          <i className="fa-solid fa-star"></i>
          <div className="left w-[80px] h-1 bg-white "></div>
        </div>

        <div className='text-center md:flex md:w-[80%] mx-auto'>
        <div className='md:w-[48%] ml-3 mb-4'>
            <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='md:w-[48%] ml-5 mb-4'>
            <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        </div>
       
      </div>
    </div>
    </section>
    
    
    
    
    
    </>
  )
}
