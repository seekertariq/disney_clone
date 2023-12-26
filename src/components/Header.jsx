import  { useState } from 'react'
import logo from '../assets/logo.svg'
import profile from "../assets/images/profile.jpg"

import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'

import { HiPlus, HiEllipsisVertical } from 'react-icons/hi2'
import HeaderItem from './HeaderItem'

function Header() {
    const [toggle,setToggle] =useState(false)
    
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },

        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },

        {
            name: 'SERIES',
            icon: HiTv
        }
    ]


    return (
        <div className='flex items-center justify-between p-2'>
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[60px] md:w-[85px] mt-[-20px] object-cover' />
                <div className='hidden lg:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex lg:hidden gap-5 items-center'>
                    {menu.map((item,index) =>index<3 && (
                        <HeaderItem key={item.name} name={''} Icon={item.icon} />
                    ))}
                    <div className='lg:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiEllipsisVertical} />
                   {toggle ?
                    <div className='absolute  mt-3 bg-[#121212] border-gray-700 border px-5 pb-4 p-3'>
                    {menu.map((item,index)=>index>2&&(
                         <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                     </div> :null
                    }
                    </div>
                </div>                
            </div>
            <img src={profile} className='w-12 h-12 rounded-full object-cover border-2 border-gray-700
               cursor-pointer hover:scale-110 hover:border-gray-500 transition-all duration-150 ease-in-out
            '/>
        </div>


    )
}

export default Header