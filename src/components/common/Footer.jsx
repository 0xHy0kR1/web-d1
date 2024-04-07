import React from "react";
import { FaWix } from "react-icons/fa6";
import "../style/custom.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";

function Footer() {
  return (
    <div className="border-t-2 border-gray-400 w-full relative md:py-12">
      {/* Our footer starts here */}
      <footer className="w-full sm:px-2 md:px-40 footer-text pt-8 flex flex-col flex-wrap md:flex-row flex-wrap md:gap-3 justify-between">
        <div className="flex flex-col gap-5">
          <h2 className=" text-md mt-4 footer-text-h">PRODUCT</h2>
          <div className="footer-text-p text-xs font-medium flex flex-col gap-3">
            <a href="#" className="cursor-pointer">
              <p>Templates</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Explore</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Features</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Website Builder</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Web Accessibility</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Velo</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Playground</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>My Sites</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Premium Plans</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix SEO</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Logo Maker</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Create a Blog</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Online Store</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Bookings</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Restaurants</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>App Market</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Domains</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Business Email</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Web Hosting</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Developers</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Enterprise</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Email Marketing</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Website Design</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Professional Tools</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-md mt-4 footer-text-h">COMPANY</h2>
          <div className="footer-text-p text-xs font-medium flex flex-col gap-3">
            <a href="#" className="cursor-pointer">
              <p>About Wix</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Press Room</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Investor Relations</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Jobs</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Design Assets</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Terms of Use</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>App Market Terms</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Privacy Policy</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Privacy and Security Hub</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Accessibility Statement</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Abuse</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Affiliates</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Capital</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Updates & Releases</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Contact Us</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Patent Notice</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Sitemap</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-md mt-4 footer-text-h">COMMUNITY</h2>
          <div className="footer-text-p text-xs font-medium flex flex-col gap-3">
            <a href="#" className="cursor-pointer">
              <p>Wix Blog</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Marketplace</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Student Website</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Encyclopedia</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Partner Community</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-md mt-4 footer-text-h">SUPPORT</h2>
          <div className="footer-text-p text-xs font-medium flex flex-col gap-3">
            <a href="#" className="cursor-pointer">
              <p>Support Center</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Getting Started Guide</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Wix Learn</p>
            </a>
            <a href="#" className="cursor-pointer">
              <p>Status Page</p>
            </a>
          </div>
        </div>
        {/* Repeat the above div as needed */}
        <div className="flex flex-col w-1/5">
          <div className="wix">
            <FaWix className="w-[60px] h-10" />
          </div>
          <p className="my-4 text-sm">
            The Wix website builder offers a complete solution from enterprise-
            grade infrastructure and business features to advanced SEO and
            marketing tools-enabling anyone to create and grow online. ©
            2006-2022 Wix.com, Inc
          </p>
          <div className="social-img flex flex-wrap gap-1">
            <a href="#">
              <div className="">
                <FaFacebookF className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <FaTwitter className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <FaYoutube className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <FaPinterestP className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <FaInstagram className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <FaLinkedinIn className="w-4 h-4" />
              </div>
            </a>
            <a href="#">
              <div className="">
                <BsTiktok className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
