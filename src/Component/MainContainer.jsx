import React, { useState } from 'react'
import LeftSideBar from './LeftSideBar'

const MainContainer = () => {
    const [value, setValue] = useState(0);
    return (
        <div className='flex flex-row justify-center w-full items-center h-screen rounded-3xl pt-[4.8rem] pl-[6rem] overflow-hidden cursor-pointer'>
            <div className='rounded-3xl rounded-b-none rounded-r-none bg-slate-100 w-full h-full p-5 flex flex-row justify-between items-start '>
                <div className='w-[22rem] h-full bg-white rounded-xl'>
                    <div className='flex flex-row w-full h-auto justify-between border-b-slate-200 border-b-2'>
                        {value === 0 ? <button onClick={() => { setValue(0) }} className='w-full py-4 bg-[#309c74] rounded-tl-xl font-semibold text-white '>বই</button> : <button onClick={() => { setValue(0) }} className='text-slate-700 w-full py-4 font-semibold'>বই</button>}
                        {value === 1 ? <button onClick={() => { setValue(1) }} className='w-full py-4 bg-[#309c74] rounded-tr-xl font-semibold text-white '>অধ্যায়</button> : <button onClick={() => { setValue(1) }} className='text-slate-700 w-full py-4 font-semibold'>অধ্যায়</button>}
                    </div>
                    <div className="w-full  flex flex-row justify-center items-center mt-5">
                        <div className="ml-[16rem] fixed ">
                            <svg class="h-5 w-5 text-slate-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                        </div>

                        <input className="p-3 px-5 w-full bg-slate-50 text-black mx-2 rounded-lg " type="search" name="" id="" placeholder={"Search For Filter"} />
                        
                    </div>
                    {
                        value === 0 ? <div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto bg-slate-100 duration-75  rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24 "
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">১</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75  rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">2</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75  rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">3</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75 rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">4</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>

                        </div> : <div>

                        <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto bg-slate-100 duration-75 rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">B</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    সহিহ বুখারী

                                    </div>
                                    <div className='text-xs'>
                                    সর্বমোট হাদিস - ৭৫৬৩
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75 rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">B</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75 rounded-lg m-3'>
                                <div className='w-1/4 flex justify-center text-3xl font-semibold items-center px-3'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        className="w-24 h-24"
                                    >
                                        <polygon
                                            points="50,5 90,25 90,75 50,95 10,75 10,25"
                                            fill="#309c74"
                                            stroke="#309c74"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <text x="46" y="60" fill="white">T</text>
                                    </svg>
                                </div>
                                <div className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2'>
                                    ওহীর সূচনা অধ্যায়

                                    </div>
                                    <div className='text-xs'>
                                    হাদিসের রেঞ্জ: ১ - ৭
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    
                </div>
                <div className='w-[41rem] h-full bg-white rounded-xl'>

                </div>
                <LeftSideBar />
            </div>

        </div>
    )
}

export default MainContainer
