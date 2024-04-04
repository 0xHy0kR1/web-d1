import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c1 from "../assets/c-1.jpg";
import c2 from "../assets/c-2.jpg";
import c3 from "../assets/c-3.jpg";
import c4 from "../assets/c-4.jpg";
import c5 from "../assets/c-5.jpg";
import './style/custom.css';
import { useState } from "react";

function Home() {
  const [selectedDot, setSelectedDot] = useState(0); // State to track the selected dot

  const handleDotClick = (index) => {
    setSelectedDot(index); // Update the selected dot when clicked
  };

  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="Header-block mx-12 mt-12 mb-6">
        <header>
          <Header />
          <p className="text-sm text-gray-600 font-medium">
            All the News You Need to Know about Wix
          </p>
        </header>
      </div>
      <div className="Navbar-block px-12">
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="section-1 border-blue-600 w-full mx-12 pt-6 mb-12">
        <div className="des flex">
          <p className="flex w-6/12 leading-relaxed">
            Wix is leading the way with a cloud-based development platform for
            users worldwide. Wix was founded on the belief that the Internet
            should be accessible to everyone to develop, create and contribute.
            Through free and premium subscriptions, Wix empowers millions of
            businesses, organizations, artists, and individuals to take their
            businesses, brands and workflow online.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          dynamicHeight={true}
          autoPlay={true}
          infiniteLoop={true}
          autoFocus={true}
          transitionTime={1000} // Time in milliseconds
          transitionEffect="fade" // Choose the transition effect, e.g., "fade", "slide", "scroll"
          selectedItem={selectedDot} // Pass selected dot to Carousel component
          onChange={(index) => handleDotClick(index)} // Handle dot click
          className="custom-carousel" // Add a custom class name to the carousel for styling
        >
          <div className="h-3/5">
            <img className="h-4/5 pb-12 w-3/4 object-cover" src={c1} alt="Image 1" />
          </div>
          <div className="h-3/5">
            <img className="h-4/5 pb-12 w-3/4 object-cover" src={c2} alt="Image 2" />
          </div>
          <div className="h-3/5">
            <img className="h-4/5 pb-12 w-3/4 object-cover" src={c3} alt="Image 3" />
          </div>
          <div className="h-3/5">
            <img className="h-4/5 pb-12 w-3/4 object-cover" src={c4} alt="Image 3" />
          </div>
          <div className="h-3/5">
            <img className="h-4/5 pb-12 w-3/4 object-cover" src={c5} alt="Image 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
