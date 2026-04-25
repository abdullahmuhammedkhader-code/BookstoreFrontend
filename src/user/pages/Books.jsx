import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaBars } from "react-icons/fa";

function Books() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center my-5">
        <h1 className="text-3xl font-bold my-5">All Books</h1>

        <div className="flex my-5">
          <input
            type="text"
            className="p-2 border border-gray-200 w-full md:w-96"
            placeholder="Search by Book Title"
          />
          <button className="p-2 bg-blue-800 text-white">Search</button>
        </div>
      </div>

      <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
        {/* Filter */}
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Filter</h1>
            <button
              onClick={() => setToggle(!toggle)}
              className="font-bold text-2xl md:hidden"
            >
              <FaBars />
            </button>
          </div>

          <div className={toggle ? "block" : "hidden md:block"}>
            <div className="mt-3">
              <input type="radio" name="filter" id="all" />
              <label htmlFor="all" className="ms-3">
                All
              </label>
            </div>

            <div className="mt-3">
              <input type="radio" name="filter" id="category" />
              <label htmlFor="category" className="ms-3">
                Category
              </label>
            </div>
          </div>
        </div>

        {/* Books */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 w-full my-10">
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img
                width={"100%"}
                height={"300px"}
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555052952i/35170836.jpg"
                alt="book"
              />
              <div className="flex flex-col justify-center items-center mt-4">
                <h2 className="text-blue-700 font-bold text-xl">Author</h2>
                <h3 className="text-lg">Title</h3>
                <p className="font-bold text-red-500">price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;