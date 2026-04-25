import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-800 text-white px-10 grid grid-cols-1 md:grid-cols-3 gap-10 py-25">
      <div>
        <h1 className="mb-3 text-2xl">ABOUT US</h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          eveniet. Voluptas debitis repellendus magnam reprehenderit sed natus
          eum, officiis voluptatem earum culpa quod asperiores rem vitae quidem
          quo id illum.
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-semibold">NEWSLETTER</h1>
        <p className="mb-4 text-sm">Stay updated on our latest trends</p>

        <div className="flex items-stretch rounded overflow-hidden w-64">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white px-3 py-1.5 text-[#1e2533] text-xs outline-none min-w-0"
          />
          <button className="bg-[#f0e040] px-3 py-1.5 flex items-center justify-center">
            <FaArrowRight className="text-[#1e2533] text-sm" />
          </button>
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-2xl">FOLLOW US</h1>
        <p className="mb-3">Let us be social</p>
        <div className="flex text-2xl">
          <FaInstagram className="mr-3" />
          <FaTwitter className="mx-3" />
          <FaFacebook className="mx-3" />
          <FaLinkedin className="ml-3" />
        </div>
      </div>
    </div>
  );
}

export default Footer;