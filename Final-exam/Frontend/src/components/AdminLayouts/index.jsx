import React from 'react'
import ClientHeader from '../../Layouts/ClientHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout