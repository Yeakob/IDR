import React from 'react'

const Sidebar = () => {
  return (
    <div className="fixed z-0 w-[6rem] h-[42rem] flex flex-col justify-center items-center px-3 bg-white mt-14">
    <div className="my-2 cursor-pointer hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8 hover:text-[#309c74] duration-100 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />  <polyline points="9 22 9 12 15 12 15 22" /></svg>
    </div>
    <div className="my-2 bg-[#309c74] cursor-pointer text-white hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8  hover:text-[#309c74] duration-100 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
    </div>
    <div className="my-2 cursor-pointer hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8 hover:text-[#309c74]  duration-100 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>

    </div>
    <div className="my-2 cursor-pointer hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8 hover:text-[#309c74] duration-100 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
    </div>
    <div className="my-2 cursor-pointer hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8 hover:text-[#309c74] duration-100 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="14" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" /></svg>
    </div>
    <div className="my-2 cursor-pointer hover:bg-slate-200 h-[4rem] rounded-lg duration-75 w-[4rem] flex justify-center items-center">
        <svg class="h-8 w-8 hover:text-[#309c74] duration-100 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
    </div>
</div>
  )
}

export default Sidebar
