import React from 'react'

function Navbar() {
  return (
    <div>
      <ul class="md:flex inline md:border-y-2 py-6 px-0 font-extrabold text-sm font-ArcherusLight">
            <li class="cursor-pointer md:pe-7 sm:my-2 sm:border-b-2 sm:w-1/6 border-e-2 md:border-b-0 text-active">Press Room</li>
            <li class="cursor-pointer md:px-7 sm:my-2 sm:border-b-2 sm:w-1/6 border-e-2 md:border-b-0">Press Release</li>
            <li class="cursor-pointer md:px-7 sm:my-2 sm:border-b-2 sm:w-1/6 border-e-2 md:border-b-0">In the News</li>
        </ul>
    </div>
  )
}

export default Navbar
