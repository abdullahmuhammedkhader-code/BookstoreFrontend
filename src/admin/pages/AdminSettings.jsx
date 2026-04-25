import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen } from "react-icons/fa";

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-5'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>settings</h1>
          {/* text center */}
          <div className='md:grid grid-cols-2 item-center'>
            <div>
              <h2 className='text-xl mb-5 '> Welcome, Admin 👋</h2>

              <p className='text-justify'> This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>

              <h4 className='text-lg my-5 font-medium'> 🔧 What You Can Manage in This Section:</h4>
              <ul>

                <li className=''>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
                <p> Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
              </ul>
            </div>
                {/* edit form  */}
             <div className="flex justify-center items-center flex-col m-10 bg-blue-100 p-5 rounded">
                      {/*  */}
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
                          className="bg-black text-white px-3 py-2 rounded-3xl z-53 "
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
                      {/* New Password */}
                      <div className=" mb-3 w-full px-5">
                        <input
                          type="text"
                          placeholder="New Password "
                          className="w-full border border-gray-300 rounded p-2"
                        />
                      </div>
                      {/* Confirm Password */}
                      <div className=" mb-3 w-full px-5">
                        <input
                          type="text"
                          placeholder="Confirm Password "
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

      </div>
      <Footer />
    </>
  )
}

export default AdminSettings