import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import Edit from "../components/Edit";
import UploadBook from "../components/UploadBook";
import BookStatus from "../components/BookStatus";
import Purchase from "../Purchase";

function Profile() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className="bg-black"></div>
      <div
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          marginTop: "-130px",
          marginLeft: "100px",
        }}
        className="bg-white p-5"
      >
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
          alt=""
        />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FaCircleCheck className="text-blue-500 ms-3 text-2xl" />
        </div>
        <Edit />
      </div>
      <p className="text-justify md:px-20 px-5 my-5">
        This is your personal space where you can manage your account, explore
        your reading activity, track your orders, and save books you love.
        Whether you're building a wishlist, discovering new arrivals, or
        reviewing your recent purchases, this page keeps everything organized
        and easy to access. Your reading journey continues here — enjoy
        exploring, discovering, and collecting stories that inspire you. ✨
      </p>
      <div className="md:px-40">
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p
            onClick={() => setCurrentTab(1)}
            className={
              currentTab == 1
                ? "p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer "
                : "p-4 border-gray-200 border-b rounded cursor-pointer "
            }
          >
            Upload Books
          </p>
          <p
            onClick={() => setCurrentTab(2)}
            className={
              currentTab == 2
                ? "p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer  "
                : "p-4 border-gray-200 border-b rounded cursor-pointer "
            }
          >
            Uploaded Book Status
          </p>
          <p
            onClick={() => setCurrentTab(3)}
            className={
              currentTab == 3
                ? "p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer  "
                : "p-4 border-gray-200 border-b rounded cursor-pointer "
            }
          >
            Purchase History
          </p>
        </div>
        {currentTab == 1 && (
          <div>
            <UploadBook />
          </div>
        )}
        {currentTab == 2 && (
          <div>
            <BookStatus />
          </div>
        )}
        {currentTab == 3 && (
          <div>
            <Purchase />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Profile;