import React from 'react'
import Navbar from './Navbar'
import RecentActivity from './RecentActivity'
import WelcomeBar from './WelcomeBar'
import Projects from './Projects'
import ActionPanel from './ActionPanel'
function Validator() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-24 px-8">
        <WelcomeBar userName="Validator" />
        <div className="my-8">
          <Projects />
        </div>
        <div className="">
          <ActionPanel />
        </div>
        <div className="my-8">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Validator