import React from 'react'

function Navbar() {
  return (
    <div className='border-y-2 border-gray-300 py-3 px-0'>
      <ul className="flex md:py-3 px-0 font-extrabold text-sm font-ArcherusLight justify-between w-[400px]">
            <li className="cursor-pointer border-e-2 border-black text-active w-[150px]">Press Room</li>
            <li className="cursor-pointer w-[200px] flex justify-center">Press Release</li>
            <li className="cursor-pointer w-[200px] border-l-2 border-black flex justify-center">In the News</li>
        </ul>
    </div>
  )
}

export default Navbar
