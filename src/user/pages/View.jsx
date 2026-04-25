import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaBackward, FaCamera, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function View() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img
                src="https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg"
                alt="book"
                className="w-full"
              />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className="text-2xl font-bold">Title</h3>
                <button
                  onClick={() => setModal(true)}
                  className="text-gray-400"
                >
                  <FaEye />
                </button>
              </div>
              <h2 className="text-blue-700 font-bold text-xl my-5">author</h2>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="text-bold">publisher:</p>
                <p className="text-bold">Languages:</p>
                <p className="text-bold">No of Pages:</p>
                <p className="text-bold">Category:</p>
                <p className="text-bold">ISBN:</p>
                <p className="text-bold">Original Price:</p>
                <p className="text-bold">Seller:</p>
              </div>
              <div className="md:my-10 my-4">
                <p className="text-bold text-lg">Abstract: </p>
              </div>
              <div className="flex justify-end">
                <Link
                  to={"/books"}
                  className="bg-blue-900 text-white p-2 font-black flex items-center"
                >
                  <FaBackward className="me-2" />
                  Back
                </Link>
                <button className="bg-green-800 text-white p-2 font-black ms-5">
                  Buy $89
                </button>
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <div
            className="relative z-10 overflow-y-auto"
            onClick={() => setModal(false)}
          >
            <div className="bg-gray-500/75 fixed inset-0">
              <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white rounded-2xl md:w-250 w-100">
                  <div className="bg-black text-white p-3">
                    <h3>Book Images</h3>
                  </div>
                  <div className="relative p-5">
                    <p className="text-blue-500 flex items-center">
                      <FaCamera className="me-2" />
                      Camera Clicks of Books
                    </p>
                    <div className="md:flex flex-wrap my-4 ">
                      <img
                        className="md:w-75 w-25 md:me-2  mb-3 md:mt-0"
                        src="https://m.media-amazon.com/images/I/81R2N4PRuUL._AC_UF1000,1000_QL80_.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default View;