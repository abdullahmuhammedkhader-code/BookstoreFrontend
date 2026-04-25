import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header top part */}
    <div className='flex justify-between items-center p-3 md:px-20'>
      <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://cdn-icons-png.flaticon.com/512/8832/8832880.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold ms-2 ">BOOKSTORE</h1>
        </div>
        {/* logout buton */}
        <button className='flex items-center px-3 py-2 bg-black text-white rounded border border-black hover:bg-white hover:text-black'> logout <FaPowerOff className='ms-2'/></button>

    </div>
    {/* header marquee */}
    <div className='w-full p-3 bg-black text-white'>
      <marquee > Welcome admin , you all set to manage and monitor the system . let,s get into work !!!</marquee>
    </div>
    </>
  )
}

export default AdminHeader