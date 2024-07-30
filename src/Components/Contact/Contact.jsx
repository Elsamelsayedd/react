import React from 'react'

export default function Contact() {

  document.title='Contact'
  return (
    <>
    
    <h2 className=' text-[40px] text-center font-bold mb-[16px] pt-60 md:pt-40'>START FRAMEWORK</h2>

        <div className="mark  flex items-center justify-center space-x-2 mb-4">
          <div className="left w-[80px] h-1 bg-[#2C3E50] "></div>
          <i className="fa-solid fa-star text-[#2C3E50]"></i>
          <div className="left w-[80px] h-1 bg-[#2C3E50] "></div>
        </div>
    



<form class=" mx-auto md:w-[60%] py-10">
  <div class="relative z-0  mb-8 group w-[90%] mx-auto">
      <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user Name :</label>
  </div>
  
  <div class="relative z-0  mb-8 group w-[90%] mx-auto">
      <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge :</label>
  </div>
  
  <div class="relative z-0  mb-8 group w-[90%] mx-auto">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail :</label>
  </div>
  
  <div class="relative z-0  mb-8 group w-[90%] mx-auto">
      <input type="password" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0  peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword :</label>
  </div>
  
  <div className='w-full text-center'>
  <button type="submit" class="text-white  w-fit bg-[#1ABC9C] hover:bg-[#1ABC9C] focus:ring-4 focus:outline-none mx-auto focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-[#1ABC9C] dark:hover:bg-[#1ABC9C] dark:focus:ring-[#1ABC9C]">send Message</button>

  </div>
</form>

    
    
    
    </>
  )
}
