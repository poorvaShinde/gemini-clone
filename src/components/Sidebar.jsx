
import React from 'react'
import { useState } from 'react'

import {assets} from '../assets/assets'
function Sidebar() {
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow(!show);
    }

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-[15px] py-[25px]">
        <div className="top" >
            <img src={assets.menu_icon} alt="" className='w-[20px] block ml-[10px] cursor-pointer' onClick={()=>{setShow(prev=>!prev)}} />
            <div className="mt-[50px] inline-flex items-center gap-[10px] px-[15px] py-[10px] bg-[#e6eaf1] rounded-[50px] cursor-pointer text-[14px] text-gray-500">
                 <img className='w-[20px]' src={assets.plus_icon} alt="" />
                {show ? <p> New Chat</p>: null }
              
            </div>    
            {show ? <div className="flex flex-col ">
                <p className='mt-[30px] mb-[20px]' >Recent</p>
                <div className="flex items-start gap-[10px] pr-[40px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
                    <img className='w-[20px]' src={assets.message_icon} alt="" />
                    <p>Lorem ipsum..............</p>
                </div>
            </div> : null}
        </div>
        <div className="flex flex-col">
            <div className="flex items-start gap-[10px] pr-[20px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px] ' src={assets.question_icon} alt="" />
                {show ? <p>Help</p> : null}
            </div>
            <div className="flex items-start gap-[10px] pr-[20px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px]' src={assets.history_icon} alt="" />
                {show ? <p>Activity</p> : null}
            </div>
            <div className="flex items-start gap-[10px] pr-[20px] p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] overflow-hidden">
            <img className='w-[20px]' src={assets.setting_icon} alt="" />
                {show ? <p>settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar

