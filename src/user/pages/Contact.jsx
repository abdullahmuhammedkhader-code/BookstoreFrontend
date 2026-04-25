import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaLocationPin, FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <div className="md:px-20 p-5 my-5">
        <h1 className="text-center my-5 font-bold text-3xl">Contact</h1>
        <p className="text-center ">
          Have questions, feedback, or need help finding the perfect book? We’d
          love to hear from you! Why Contact Us? Order-related support Book
          availability inquiries Return/replacement queries Bulk/Institutional
          purchase requests Author or partnership inquiries. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Hic veniam id eveniet
          recusandae pariatur, facilis fuga? Iusto, asperiores modi cum
          praesentium et, libero nisi eaque harum sed deleniti odio eveniet.
          Maiores delectus iusto voluptatibus officia eveniet sunt quibusdam
          mollitia, error fugit laborum dolorum deserunt! Quaerat magni ad,
          veritatis dolor iusto, aliquam nisi consequatur officiis perferendis
          unde, maiores quos praesentium voluptatibus. Magni dolores impedit,
          officia doloribus repellat fuga quos ad natus recusandae sed numquam
          fugiat, sapiente minima, nam vero incidunt libero earum. Minima
          praesentium laborum tenetur corporis quod dolorum maxime pariatur.
        </p>
        <div className="md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0">
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="flex items-center justify-center bg-gray-200"
            >
              <FaLocationPin />
            </div>
            <p className="ms-5"> 123 Main Street, Apt 48 , AnyTown, CA 91234</p>
          </div>
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="flex items-center justify-center bg-gray-200"
            >
              <FaPhone />
            </div>
            <p className="ms-5">+09876524856</p>
          </div>
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="flex items-center justify-center bg-gray-200"
            >
              <FaEnvelope />
            </div>
            <p className="ms-5">contact@bookstore.com</p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40">
          <div className="bg-gray-100 p-5 text-center">
            <h1 className="font-semi-bold text-2xl">Send Us a Message!</h1>
            <form>
              <div className="mb-5 mt-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5 mt-10">
                <input
                  type="text"
                  placeholder="E mail"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5 mt-10">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5">
                <button className="bg-black w-full p-2 text-white flex justify-center items-center">
                  {" "}
                  Submit <FaPaperPlane className="ms-2"/>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9841724220605!2d76.34009657479382!3d10.018164390088167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1775627524208!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;