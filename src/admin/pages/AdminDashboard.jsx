import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'


function AdminDashboard() {
  return (
    <>
    <AdminHeader />
    <div className='md:grid grid-cols-5 gap-5'>
      <div className='col-span-1'> 
        <AdminSideBar />
      </div>
      <div className='col-span-4'>
        AdminDashboard
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AdminDashboard