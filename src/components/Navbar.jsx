import React from 'react'

function Navbar() {
  return (
    <div className=''>
      <ul class="md:flex hidden border-solid border-y-2 py-6 px-0 font-extrabold text-sm font-ArcherusLight">
            <li class="cursor-pointer pe-7 border-e-2 text-active">Press Room</li>
            <li class="cursor-pointer px-7 border-e-2">Press Release</li>
            <li class="cursor-pointer px-7 border-e-2">In the News</li>
        </ul>
    </div>
  )
}

export default Navbar
