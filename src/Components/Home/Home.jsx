import React from 'react'
import homeImage from '../../assets/avataaars.svg'

export default function Home() {


  document.title='Home'

  return (
    <>
<section className='home bg-[#1ABC9C] text-white py-28'>
    <div className="container mx-auto flex justify-center items-center flex-wrap text-center">
      <div className="home-content w-full">
        
        <div className="homeImage w-[250px] mx-auto mb-4">
          <img src={homeImage} className='w-full' alt="avatar" />
        </div>

        <h2 className=' text-[40px] font-bold mb-[16px] pt-4'>START FRAMEWORK</h2>

        <div className="mark  flex items-center justify-center space-x-2 mb-4">
          <div className="left w-[80px] h-1 bg-white "></div>
          <i className="fa-solid fa-star"></i>
          <div className="left w-[80px] h-1 bg-white "></div>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
       
      </div>
    </div>
    </section>
    
    
    
    </>
  )
}
