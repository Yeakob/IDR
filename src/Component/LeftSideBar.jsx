import React from 'react'
import "./style.css"
const LeftSideBar = () => {
    return (
        <div className='w-[21rem] h-auto'>
            <div className='flex flex-col text-sm w-full h-auto justify-start items-start rounded-xl p-3 bg-white'>
                
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
                <input className='w-full p-5 thumb:bg-green-400' style={{'--thumb-color': '#309c74'}} type="range" name="" id=""  min="19" max="30" />
                অনুবাদ ফন্ট সাইজ
                <input className='w-full p-5 ' type="range" name="" id=""  min="19" max="30" />
                <div className='py-2'>
                নাইট মোড
                in
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
