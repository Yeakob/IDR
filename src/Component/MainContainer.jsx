import React, { useState } from 'react'
import LeftSideBar from './LeftSideBar'
import { LiaSwatchbookSolid } from "react-icons/lia";

const MainContainer = () => {
    const [value, setValue] = useState(0);
    const [click , setClicked ] = useState("");
    const [num,setNum] = useState(0);
    return (
        <div className='flex flex-row justify-center w-full items-center h-screen rounded-3xl pt-[4.8rem] pl-[6rem] overflow-scroll cursor-pointer'>
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
                        value === 1 ? <div>
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
                                <div onClick={()=>{setNum(1)}} className='w-3/4 flex justify-start items-start flex-col'>
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
                                <div onClick={()=>{setNum(2)}} className='w-3/4 flex justify-start items-start flex-col'>
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
                                <div onClick={()=>{setNum(3)}} className='w-3/4 flex justify-start items-start flex-col'>
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

                        <div onClick={()=>{setClicked("Bukhari")}} className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto bg-slate-100 duration-75 rounded-lg m-3'>
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
                                        <text x="44" y="60" fill="white">B</text>
                                    </svg>
                                </div>
                                <div onClick={()=>{setClicked("Bukhari")}} className='w-3/4 flex justify-start items-start flex-col'>
                                    <div className='pb-2' >
                                    সহিহ বুখারী

                                    </div>
                                    <div className='text-xs'>
                                    সর্বমোট হাদিস - ৭৫৬৩
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>{setClicked("Muslim")}}  className='flex flex-row items-center justify-around p-2 text-slate-700 w-auto hover:bg-slate-100 duration-75 rounded-lg m-3'>
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
                                        <text x="38" y="60" fill="white">M</text>
                                    </svg>
                                </div>
                                <div onClick={()=>{setClicked("Muslim")}} className='w-3/4 flex justify-start items-start flex-col'>
                                    <div  className='pb-2'>

                                    সহিহ মুসলিম


                                    </div>
                                    <div className='text-xs'>
                                    সর্বমোট হাদিস - ৭৪৫৩
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    }
                    
                </div>


                {

                    //Middle component 

                }
                <div className='w-[42rem] h-full bg-slate-50 rounded-xl'>
                    <div className='flex flex-row w-full h-auto justify-start items-center p-4 text-sm text-slate-600 font-sans border-b-slate-200 border-b-2'>
                    <LiaSwatchbookSolid className='text-3xl' /> {">"} {click} {value===1? <div> {">"} {num} </div> :  <div> </div>}
                    </div>
                    <div className='p-5 bg-white w-full h-max flex flex-row justify-between items-center'>
                      <div className='text-xl font-semibold text-slate-700'>
                      {click === "Bukhari" ? <div>সহিহ বুখারী</div> : <div>সহিহ মুসলিম</div>}
                      </div>
                      <div className="w-1/2 flex flex-row justify-center items-center ">
                        <div className="ml-[16rem] fixed ">
                            <svg class="h-5 w-5 text-slate-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                        </div>

                        <input className="p-3 px-5 w-full bg-slate-50 text-black mx-2 rounded-lg " type="search" name="" id="" placeholder={"Search For Filter"} />
                        
                    </div>
                    </div>
                    <div className='bg-white px-5 text-start text-sm text-slate-700 leading-7'>
                    {click === "Bukhari" ? <div>
                            সংকলক : শাইখ ইমামুল হুজ্জাহ আবু ‘আবদুল্লাহ মুহাম্মাদ বিন ইসমা’ঈল বিন ইবরাহীম বিন মুগীরাহ্‌ আল বুখারী আল-জু’ফী। মোট হাদীস সংখ্যা : ৭৫৬৩ টি। প্রকাশনী : তাওহীদ পাবলিকেশন্স। মৌলিক হাদীস গ্রন্থ হিসাবে সহীহুল বুখারী গ্রন্থটি হাদীসের কিতাবগুলির মধ্যে সর্বশ্রেষ্ঠ। শুধু তাই নয় এর সংশ্লিষ্ট ব্যক্তিগবের্গর সর্বজন স্বীকৃত মন্তব্য হলো : আল কুরআনের পরে মানব রচিত বা সংকলিত গ্রন্থের মধ্যে সর্বশ্রেষ্ঠ কিতাব নিঃসন্দেহে সহীহুল বুখারী। বুখারী সংকলন করতে গিয়ে ইমাম বুখারী (রহঃ) কে যে কী পরিমাণ পরিশ্রম ও সাধনা করতে হয়েছে তা বর্ণনাতীত। মহান আল্লাহ তা’আলা তাঁর এই পরিশ্রমকে ক্ববুল করুন এবং এ মহান সাদাকায়ে যারিয়ার জন্য তাঁকে জান্নাতুল ফেরদৌস-এর পুরষ্কারে ভুষিত করুন। - আমীন।
                    </div> : <div>সংকলক : ইমাম আবুল হুসাইন মুসলিম ইবনুল হাজ্জাজ আল কুশাইরী আন্‌ নিসাপুরী (রহ.)। মোট হাদীস সংখ্যা : ৭৪৫৩ টি। প্রকাশনী : হাদীস একাডেমী, ঢাকা। রসূলুল্লাহ (স.) এর পবিত্র হাদীসের উপর সংকলিত গ্রন্থসমূহের মধ্যে বিশুদ্ধতার মাপকাঠিতে সহীহাইনা বা বুখারী ও মুসলিম হচ্ছে পূর্ণমাত্রায় উত্তীর্ণ। বিশুদ্ধতার দিন দিয়ে পবিত্র কুরআনের পরই এ হাদীসগ্রন্থদ্বয়ের স্থান। আর মুসলিম উম্মাহ ও ইসলামী শারী’আতের বিশষজ্ঞগণের মধ্যে এ বিষয়ে কোন মতবিরোধ নেই যে, হাদীস গ্রন্থসমূহের মধ্যে সর্বশ্রেষ্ঠ হচ্ছে ইমাম বুখারী (রহ.) সংকলিম সহীহুল বুখারী। আর এর পরই সহীহ মুসলিমের স্থান, ইমাম মুসলিম কোন বিষয়ের উপর বর্ণিত সকল মতন বা বিভিন্ন শব্দে বণিত হয়েছে একই স্থানে একত্রিত করে লিপিবদ্ধ করেছেন। তাদেরকে বিভিন্ন অধ্যায়ে লিপিবদ্ধ করেননি। প্রত্যেক রাবী কর্তৃক বণিত শব্দ স্বতন্ত্রভাবে বর্ণনা করেছেন। মহান আল্লাহ তা’আলা তাঁর এই পরিশ্রমকে ক্ববুল করুন এবং এ মহান সাদাকায়ে যারিয়ার জন্য তাঁকে জান্নাতুল ফেরদৌস-এর পুরষ্কারে ভুষিত করুন। - আমীন।</div>}
                    </div>
                </div>
                <LeftSideBar />
            </div>

        </div>
    )
}

export default MainContainer
