import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='py-10 bg-[#2C3E50] text-center text-white'>
        <div className="conatiner w-[80%] mx-auto">
            <div className="footerDetails md:flex ">
            <div className="md:w-1/3 p-4 mx-auto">
              <p className='pt-[20px] mb-2 font-[28px]'>LOCATION</p>
              <p className='mb-4'>2215 John Daniel Drive </p>
              <p className='mb-4'>Clark, MO 65243</p>
            </div>

            <div className="md:w-1/3 p-4 mx-auto">
              <p className='pt-[20px] mb-2 text-[28px]'>AROUND THE WEB</p>
              <div className="footer-icon flex space-x-2 justify-center">
                <div className='w-8 h-8 rounded-full border-2  border-white flex justify-center items-center' >
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div  className='w-8 h-8 rounded-full border-2  border-white flex justify-center items-center'>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div  className='w-8 h-8 rounded-full border-2  border-white flex justify-center items-center'>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div  className='w-8 h-8 rounded-full border-2  border-white flex justify-center items-center'>
                  <i className="fa-brands fa-chrome"></i>
                </div>
              </div>
              
            </div>

            <div className="md:w-1/3 md:p-4 mx-auto">
              <p className='pt-[20px] mb-2 text-[28px] font-bold'>ABOUT FREELANCER</p>
              <p className='mb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
             
            </div>
            </div>
        </div>
        
        </footer>

        <div className='text-center text-white p-5 bg-[#1A252F]'>
          <p>Copyright © Your Website 2021</p>
        </div>

    
    
    </>
  )
}
