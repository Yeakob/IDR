import React, { useState } from 'react'
import "../index.css"


const LeftSideBar = () => {

    const [fsize,setfSize] = useState(19);
    const [fsize2,setfSize2] = useState(14);

    return (
        <div className='w-[21rem] h-[37rem] overflow-y-scroll no-scrollbar'>
            <div className='flex flex-col text-sm w-full h-auto px-5 justify-start items-start rounded-xl p-3 bg-white'>
                
                <div className='w-full flex justify-center items-center p-4 text-xl'>
                সেটিংস
                </div>
                <label className='text-sm py-3' htmlFor="আরবি ফন্ট সিলেক্ট করুন">আরবি ফন্ট সিলেক্ট করুন</label>
                <select className='w-full py-3 my-3 border-slate-200 border-2 rounded-md px-2'>
                    <option className='p-2 hover:bg-slate-200 duration-100' value="KFGQ">KFGQ</option>
                    <option className='p-2 hover:bg-slate-200 duration-100' value="Me Quran">Me Quran</option>
                    <option className='p-2 hover:bg-slate-200 duration-100' value="KFGQ">KFGQ</option>
                    <option className='p-2 hover:bg-slate-200 duration-100' value="Me Quran">Me Quran</option>
                </select>
                এরাবিক ফন্ট সাইজ
                <div className=' w-full flex flex-row justify-center items-center'><input onChange={(e) => { setfSize(e.target.value) }} className='border-none w-[16rem] accent py-5 px-2' type="range" name="" id="" min="18" max="40" /> <span className='pl-2 pb-1 font-semibold font-mono text-slate-600'>{fsize}</span></div>
                অনুবাদ ফন্ট সাইজ
                <div className='w-full flex flex-row justify-center items-center'><input onChange={(e) => { setfSize2(e.target.value) }} className='border-none w-[16rem] accent py-5 px-2' type="range" name="" id="" min="14" max="25" /> <span className='pl-2 pb-1 font-semibold font-mono text-slate-600'>{fsize2}</span></div>
                <div className='pb-2 w-full flex flex-row justify-around items-center'>
                    <div className='w-2/3 flex justify-start'>নাইট মোড</div>
                    <div className='w-1/3 flex justify-end pl-10'>
                        <label className="switch">
                                <input type="checkbox" name="" id="" />
                                <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-sm w-full h-auto justify-start items-start rounded-xl text-start p-5 bg-[#309c74] text-white mt-5'>
                <div className='text-xl py-2'> 
                আপনিও সদাকায়ে জারিয়াতে অংশ নিন
                </div>
            আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।

             <div className='w-full flex justify-center py-3 items-center'><button className='text-center py-3 px-5 bg-white rounded-lg text-[#309c74] '>সাপোর্ট করুন</button></div> 
            </div>
        </div>
    )
}

export default LeftSideBar
