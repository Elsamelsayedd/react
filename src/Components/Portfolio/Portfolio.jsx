import React from 'react'
import poert1 from '../../assets/poert1.png'
import poert2 from '../../assets/port2.png'
import poert3 from '../../assets/port3.png'

export default function Portfolio() {

  document.title='Portfolio';


  return (
    <>
        <section className='relative pt-60 md:pt-40'>
        <h2 className=' text-[40px] text-center font-bold mb-[16px] '>START FRAMEWORK</h2>

<div className="mark  flex items-center justify-center space-x-2 mb-4">
  <div className="left w-[80px] h-1 bg-[#2C3E50] "></div>
  <i className="fa-solid fa-star text-[#2C3E50]"></i>
  <div className="left w-[80px] h-1 bg-[#2C3E50] "></div>
</div>
    

<div className="conatiner mx-auto w-[80%] mb-8">

  <div className="portfolio-img grid md:grid-cols-3 gap-x-4 gap-y-4">

    
    <div className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert1} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>

    <div className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert2} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>

    <div className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert3} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>

    <div className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert1} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>

    <div className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert2} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>

    <div onClick={(e)=>{console.log(e)}} className="innerspace relative overflow-hidden group cursor-pointer">

      <div className="imgPortfolio ">
          <img src={poert3} className='w-full rounded-2xl' alt="poert"  />


        </div>


        <div className="layer absolute bg-[#1ABC9C]   group-hover:opacity-70 transition-all duration-500 top-0 left-0 right-0 bottom-0 opacity-0 rounded-2xl">
        <div className="layer-icon flex justify-center items-center w-full h-full">
        <i className="text-white text-5xl fa-solid fa-plus fa-5x"></i>
        </div>
          
        </div>  
    </div>
    


 </div>



</div>


<div className="hidden  photo-click   justify-center items-center fixed  top-0 left-0 right-0 bottom-0 bg-[#c2dbfed1]">
      <div className="click-img w-[40%] ">
      <img src={poert1} alt="poert1" className='w-full' />
      </div>
    </div>

        </section>
    
 
    
    
    </>
  )
}
