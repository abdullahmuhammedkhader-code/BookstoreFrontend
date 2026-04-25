import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit  py-10'>
      {/* image */}
      <div className='flex justify-center'>
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
      </div>
      {/* name */}
      <h3 className='text-xl font-bold my-5 text-center'> Name</h3>
      {/*  links */}
      <div className='mt-5 flex flex-col justify-center items-center'>
        <div className='mt-3'>
          <Link to={'/admin'} className='flex items-center'> <FaChartSimple className='me-2'/> dashboard  </Link>
          <Link to={'/admin/resources'} className='flex items-center'> <FaChartSimple className='me-2'/> collection  </Link>
          <Link to={'/admin/setting'} className='flex items-center'> <FaChartSimple className='me-2'/> settings </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar