import React from 'react'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import c1 from "../assets/c-1.jpg"
import c2 from "../assets/c-2.jpg"
import c3 from "../assets/c-3.jpg"
import c4 from "../assets/c-4.jpg"
import c5 from "../assets/c-5.jpg"

function Carousel() {
    const slides = [
        {
            url: c1
        },
        {
            url: c2
        },
        {
            url: c3
        },
        {
            url: c4
        },
        {
            url: c5
        },
    ]
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronLeft />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronRight />
        </div>
    </div>
  )
}

export default Carousel
