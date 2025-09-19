import React from 'react'
import AdminNav from './AdminNav'
import WelcomeBar from './WelcomeBar'
import PendingApproval from './PendingApproval'
import ProjectApproval from './ProjectApproval'
import AdminAction from './AdminAction'
import Footer from './Footer'
function AdminDash() {
  return (
    <>
      <div className="w-full bg-gray-50 min-h-screen">
        <AdminNav />
        <div className="pt-24 px-8">
          <WelcomeBar userName="Admin" />
          <div className="my-8">
            <PendingApproval />
          </div>
          <div className="my-8">
            <ProjectApproval />
          </div>
          <div className="">
            <AdminAction />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminDash