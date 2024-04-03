import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='flex flex-col justify-between gap-4'>
      <div className='Header-block mx-12 mt-12 mb-6'>
        <header>
          <Header />
          <p className='text-sm text-gray-600 font-medium'>All the News You Need to Know about Wix</p>
        </header>
      </div>
      <div className='Navbar-block px-12'>
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="section-1 border-blue-600 w-full mx-12 pt-6 mb-12">
        <div className="des flex">
          <p className='flex w-6/12 leading-relaxed'>Wix is leading the way with a cloud-based development platform for users worldwide. Wix was
founded on the belief that the Internet should be accessible to everyone to develop, create and
contribute. Through free and premium subscriptions, Wix empowers millions of businesses,
organizations, artists, and individuals to take their businesses, brands and workflow online.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
