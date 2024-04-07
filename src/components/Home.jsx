import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/custom.css";
import { useState } from "react";
import c1 from "../assets/c-1.jpg";
import c2 from "../assets/c-2.jpg";
import c3 from "../assets/c-3.jpg";
import c4 from "../assets/c-4.jpg";
import c5 from "../assets/c-5.jpg";
import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWix } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Home() {
  const [selectedDot, setSelectedDot] = useState(0); // State to track the selected dot

  const handleDotClick = (index) => {
    setSelectedDot(index); // Update the selected dot when clicked
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <div>
      <div className="flex flex-col px-36">
        {/* Header starts here */}
        <div className="Header-block mx-12 mt-12 mb-6">
          <header>
            <Header />
            <p className="text-sm text-gray-600 font-medium">
              All the News You Need to Know about Wix
            </p>
          </header>
        </div>
        {/* Header end here */}

        {/* Navbar starts here */}
        <div className="Navbar-block px-12">
          <nav>
            <Navbar />
          </nav>
        </div>
        {/* Navbar end here */}

        
        {/* section-1 starts here */}
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
        {/* section-2 end here */}

        {/* section-2 starts here */}
        <div className="section-2">
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
                <img
                  className="h-4/5 pb-12 w-3/4 object-cover"
                  src={c1}
                  alt="car1"
                />
              </div>
              <div className="h-3/5">
                <img
                  className="h-4/5 pb-12 w-3/4 object-cover"
                  src={c2}
                  alt="car2"
                />
              </div>
              <div className="h-3/5">
                <img
                  className="h-4/5 pb-12 w-3/4 object-cover"
                  src={c3}
                  alt="car3"
                />
              </div>
              <div className="h-3/5">
                <img
                  className="h-4/5 pb-12 w-3/4 object-cover"
                  src={c4}
                  alt="car4"
                />
              </div>
              <div className="h-3/5">
                <img
                  className="h-4/5 pb-12 w-3/4 object-cover"
                  src={c5}
                  alt="car5"
                />
              </div>
            </Carousel>
          </div>
        </div>
        {/* section-2 ends here */}

        {/* section-3 starts here */}
        <div className="section-3 mx-12 mt-12 mb-6 flex flex-col justify-between gap-y-24">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold font-ArcherusBold">
              Press Releases
            </h2>
            <span>
              <a
                href="#"
                className="font-bold font-ArcherusLight border-b-2 border-black"
              >
                View All
              </a>
            </span>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col justify-between gap-4 border-b-2 border-black pb-20">
              <p className="font-bold font-serif text-sm dates">June 14, 2022</p>
              <div className="flex justify-between gap-60">
                <p>Wix Wins Google Cloud Expansion Partner of the Year Award</p>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 border-b-2 border-black pb-20">
              <p className="font-bold font-serif text-sm dates">June 7, 2022</p>
              <div className="flex justify-between gap-60">
                <p>
                  Wix Relaunches its Solution for Hotels - Now Powered by
                  HotelRunner, Providing a Comp...
                </p>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 border-b-2 border-black pb-20">
              <p className="font-bold font-serif text-sm dates">April 27, 2022</p>
              <div className="flex justify-between gap-60">
                <p>
                  Wix and LegalZoom Join Forces to Offer Personalized Solutions
                  for Small Businesses to...
                </p>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 border-b-2 border-black pb-20">
              <p className="font-bold font-serif text-sm dates">April 18, 2022</p>
              <div className="flex justify-between gap-60">
                <p>Wix Events Launches Seating Map Builder</p>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* section-3 ends here */}

        {/* section-4 starts here */}
        <div className="section-3 mx-12 mt-28 mb-6 flex flex-col justify-between gap-y-24">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold font-ArcherusBold">In The News</h2>
            <span>
              <a
                href="#"
                className="font-bold font-ArcherusLight border-b-2 border-black"
              >
                View All
              </a>
            </span>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-20">
              <p className="font-medium text-sm dates font-ArcherusLight">
                April 28, 2022
              </p>
              <div className="flex justify-between gap-60">
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-ArcherusBold">Bloomberg</p>
                  <p className="font-ArcherusLight font-semibold">
                    How E-Scooters Are Transforming Tel Aviv
                  </p>
                </div>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-20">
              <p className="font-medium text-sm dates font-ArcherusLight">
                April 27, 2022
              </p>
              <div className="flex justify-between gap-60">
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-ArcherusBold">Benzinga</p>
                  <p className="font-ArcherusLight font-semibold">
                    Wix, LegalZoom Collaborate To Boost Online Presence Of Small{" "}
                  </p>
                </div>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-20">
              <p className="font-medium text-sm dates font-ArcherusLight">
                April 26, 2022
              </p>
              <div className="flex justify-between gap-60">
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-ArcherusBold">HostingAdvice.com</p>
                  <p className="font-ArcherusLight font-semibold">
                    Wix Partners with Agencies to Build High-Performance Websites
                    for Scalable Growth
                  </p>
                </div>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5 border-b-2 border-black pb-20">
              <p className="font-medium text-sm dates font-ArcherusLight">
                April 18, 2022
              </p>
              <div className="flex justify-between gap-60">
                <div className="flex flex-col justify-between gap-2">
                  <p className="font-ArcherusBold">DevOps.com</p>
                  <p className="font-ArcherusLight font-semibold">
                    Nurturing a Developer-Centric Culture
                  </p>
                </div>
                <span>
                  <a
                    href="#"
                    className="font-bold font-ArcherusLight border-b-2 border-black"
                  >
                    READ MORE
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* section-4 ends here */}

        {/* section-5 starts here */}
        <div className="section-5 flex flex-wrap justify-center gap-8">
          <div className="card-1 flex flex-col gap-8">
            <img className="h-72 w-[19vw]" src={card1} alt="card1" />
            <div className="text flex flex-col gap-2">
              <p className="title font-ArcherusBold font-extrabold text-lg">
                Brand Assets
              </p>
              <p className="desc w-72 font-ArcherusLight font-semibold text-sm leading-6">
                All of the official design assets and guidelines used by Wix can
                be found here, along with all the information you need about our
                graphic elements and the philosophy behind them.
              </p>
            </div>
          </div>
          <div className="card-2 flex flex-col gap-8">
            <img className="h-72 w-[19vw]" src={card2} alt="card2" />
            <div className="text">
              <p className="title font-ArcherusBold font-extrabold text-lg">
                About Us
              </p>
              <p className="desc w-72 font-ArcherusLight font-semibold text-sm leading-6">
                Wix makes it easy for everyone to get online with a stunning,
                professional and powerful web presence. Learn more about our
                company, customers, products and people.
              </p>
            </div>
          </div>
          <div className="card-3 flex flex-col gap-8">
            <img className="h-72 w-[19vw]" src={card3} alt="card3" />
            <div className="text">
              <p className="title font-ArcherusBold font-extrabold text-lg">
                Investor Relations
              </p>
              <p className="desc w-72 font-ArcherusLight font-semibold text-sm leading-6">
                Information about Wix for investors and financial analysts. You
                can also find a company glossary, stats, and a list of IR events
                and presentations.
              </p>
            </div>
          </div>
        </div>
        {/* section-6 ends here */}

        {/* Social img section */}
        {/* section-7 starts here */}
        <div className="section-7 mx-12 mt-28 mb-6 flex flex-col justify-between gap-y-10">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold font-ArcherusBold">Social</h2>
          </div>
          <div className="social-img flex flex-wrap">
            <div className="wix py-14 px-16 social-border">
              <FaWix className="w-[60px] h-10" />
            </div>
            <div className="wix py-14 px-16 social-border">
              <FaFacebookSquare className="w-[60px] h-10" />
            </div>
            <div className="wix py-14 px-16 social-border">
              <FaInstagram className="w-[60px] h-10" />
            </div>
            <div className="wix py-14 px-16 social-border">
              <FaYoutube className="w-[60px] h-10" />
            </div>
            <div className="wix py-14 px-16 social-border">
              <FaTwitter className="w-[60px] h-10" />
            </div>
          </div>
        </div>
        {/* section-7 ends here */}

        {/* section-8 starts here */}
        <div className="section-7 mx-12 mt-28 mb-6 flex flex-col justify-between gap-y-24">
          <div className="flex flex-wrap gap-28 w-11/12">
            <div className="flex gap-3">
              <h2 className="text-3xl font-bold font-ArcherusBold">Contact Us</h2>
            </div>
            <div className="flex flex-col justify-between gap-14 w-7/12">
              <div>
                <p className="desc w-72 font-ArcherusLight font-semibold text-sm leading-6">
                  If you're a member of the media and would like to get in touch,
                  please send us a note. For non-press-related inquiries, please use
                  our
                  <span>
                    <a
                      href="#"
                      className="mx-1 font-bold font-ArcherusLight text-active"
                    >
                      general contact page.
                    </a>
                  </span>
                </p>
              </div>
              <div className="form w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12 w-full">
                  <div className="form-group flex flex-wrap gap-6 items-center">
                    <div className="form-control flex flex-col w-[45%]">
                      <input
                        className="border-black border-b-2 text-black pb-2 pl-2 placeholder-black w-full font-ArcherusLight font-semibold"
                        type="text"
                        name="name"
                        placeholder="First Name"
                        style={{ color: "black" }}
                        {...register("name", {
                          required: "Name is required.",
                        })}
                      />
                      {errors.name && (
                        <p className="errorMsg">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="form-control w-[45%]">
                      <input
                        className="border-black border-b-2 pb-2 pl-2 placeholder-black w-full font-ArcherusLight font-semibold"
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        {...register("phone", {
                          required: "Phone is required.",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number is not valid.",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="errorMsg">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="form-control w-[95%]">
                    <input
                      className="border-black border-b-2 pb-2 pl-2 placeholder-black w-full font-ArcherusLight font-semibold"
                      type="text"
                      name="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required.",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Email is not valid.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="errorMsg">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="form-control form-control w-[95%]">
                    <textarea
                      className="border-black border-2 placeholder-grey p-3 w-full font-ArcherusLight font-semibold text-sm"
                      name="message"
                      {...register("message", {
                        required: "Message is required.",
                      })}
                      placeholder="Type your message here...."
                    ></textarea>
                    {errors.message && (
                      <p className="errorMsg">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="form-control border-2 border-black px-16 py-1 flex justify-center items-center w-[13%] rounded-2xl">
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* section-8 ends here */}

      </div>
      </div>
    </>
  );
}

export default Home;
