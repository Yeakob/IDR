import React from 'react'

const Navbar = () => {


  return (
    <div className="fixed w-full z-10 h-auto py-2 px-4 bg-white flex flex-row justify-between items-center">


      <div className="flex flex-row justify-center items-center">
        <svg class="h-12 w-12 text-[#309c74]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
        <div className="text-slate-800 flex flex-col  items-start font-semibold text-lg m-2 px-2 tracking-tight">

          হাদিস সমূহ
          <span className="text-xs font-thin">হাদিস পড়ুন শিখুন এবং জানুন</span>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className="mr-0 ml-[4rem] fixed ">
          <svg class="h-5 w-5 text-slate-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
        </div>

        <input className="p-3 px-5 w-[17rem] text-black mx-10 border-2 rounded-lg border-gray-300" type="search" name="" id="" placeholder={"Search Hadith"} />
        <button className="bg-[#309c74] py-3 px-4 flex text-white flex-row justify-between items-center rounded-md shadow-sm text-sm font-semibold">সাপোর্ট করুন <div className='px-1'><svg class="h-6 w-6 text-slate-100 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg></div> </button>
      </div>


    </div>
  )
}

export default Navbar
