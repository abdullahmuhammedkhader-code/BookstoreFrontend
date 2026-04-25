import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'


function AdminResources() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-5'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'> all resources</h1>
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p
              onClick={() => setCurrentTab(1)}
              className={
                currentTab == 1
                  ? "p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer "
                  : "p-4 border-gray-200 border-b rounded cursor-pointer "
              }
            >
              Books
            </p>
            <p
              onClick={() => setCurrentTab(2)} className={currentTab == 2 ? "p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer  "
                : "p-4 border-gray-200 border-b rounded cursor-pointer "}>
              users
            </p>

          </div>
          {currentTab == 1 && (
            <div className='md:grid grid-cols-4 w-full my-5'>
              <div className='shadow rounded p-3 m-4 md:my-0' >
                <img width={'100%'} height={'300px'} src="https://tse4.mm.bing.net/th/id/OIP.TH8Jj3_oRNQrf4gkHjeUkwHaLH?pid=Api&P=0&h=180" alt="books" />
                <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-700 font-bold text'>tile</h2>
                  <h2 className='text-blue-700 font-bold text'>author</h2>
                  <h2 className='text-blue-700 font-bold text'>price</h2>
                  {/* approve */}
                  <button className='bg-green-200 text-white p-2 mt-2 w-full '> aprove</button>
                </div>
              </div>
            </div>
          )}
          {currentTab == 2 && (
            <div className='md:grid grid-cols-4 w-full my-5'>
              <div className=' rounded bg-gray-200 p-2 m-2 ' >
                <p className='text-red-500 font-bold textmd'> : id</p>
                <div className='flex mt-3 items-center'> <img width={'80px'} height={'80px'} style={{borderRadius:"50px"}} src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="books" /></div>
                <div className="flex flex-col ml-3 w-full">
                  <h4 className='text-blue-400 font-bold text-md'> username</h4>
                  <p className='text-xs'> amil</p>
                </div>


              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminResources