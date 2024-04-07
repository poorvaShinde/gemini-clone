
import React from 'react'
import {assets} from '../assets/assets'
function Sidebar() {
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-[25px] py-[15px]">
        <div className="top" >
            <img src={assets.menu_icon} alt="" className='w-[20px] block ml-[10px] cursor-pointer' />
            <div className="mt-[10px] inline-flex items-center gap-[10px] px-[10px] py-[10px] bg-[#e6eaf1] rounded-[50px] cursor-pointer text-[14px] text-gray-500">
                 <img className='w-[20px]' src={assets.plus_icon} alt="" />
                <p>
                    New Chat
                </p>
            </div>    
            <div className="flex flex-col ">
                <p className='mt-[30px] mb-[20px]' >Recent</p>
                <div className="flex items-start gap-[10px] pr-[40px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
                    <img className='w-[20px]' src={assets.message_icon} alt="" />
                    <p>Lorem ipsum..............</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex items-start gap-[10px] pr-[40px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px] ' src={assets.question_icon} alt="" />
                    <p>Help</p>
            </div>
            <div className="flex items-start gap-[10px] pr-[40px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px]' src={assets.history_icon} alt="" />
                    <p>Activity</p>
            </div>
            <div className="flex items-start gap-[10px] pr-[40px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

