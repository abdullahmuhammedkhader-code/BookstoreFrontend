import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Edit() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOffCanvas(true)}
        className="bg-black text-white p-2 flex items-center rounded hover:bg-white hover:text-black"
      >
        <FaPen className="me-2" />
        Edit
      </button>
      {offCanvas && (
        <div>
          <div className="fixed inset-0 bg-gray-500 w-full h-full"></div>
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
              <h1>Update User Profile</h1>
              <FaX onClick={() => setOffCanvas(false)} />
            </div>
            <div className="flex justify-center items-center flex-col my-5">
              <label htmlFor="userProfile">
                <input type="file" name="" id="userProfile" hidden />
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  className="border border-gray-300 z-52"
                  src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
                  alt=""
                />
                <button
                  className="bg-black text-white px-3 py-2 rounded-3xl z-53 fixed "
                  style={{ marginLeft: "50px", marginTop: "-15px" }}
                >
                  <FaPen />
                </button>
              </label>
              <div className="mt-10 mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className=" mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="New Password "
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className=" mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Confirm Password "
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-3 w-full px-5">
                <input
                  type="text"
                  placeholder="Bio"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="flex justify-end w-full px-5 mt-5 gap-3">
                <button className="bg-yellow-600 text-white py-2 px-3 rounded">
                  Reset
                </button>
                <button className="bg-green-600 text-white py-2 px-3 rounded">
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit;