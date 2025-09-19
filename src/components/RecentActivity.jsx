import React from 'react'

function RecentActivity() {
    const activities = [
        { id: 1, description: 'Uploaded verification report for Project A', timestamp: '2024-10-01 10:00 AM' },
        { id: 2, description: 'Submitted validation statement for Project B', timestamp: '2024-10-02 02:30 PM' },
        { id: 3, description: 'Requested clarification for Project C', timestamp: '2024-10-03 11:15 AM' },
    ];
  return (
    <div className="px-4">
      <h2 className="text-xl px-4 text-gray-700 font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map(activity => (
          <li key={activity.id} className="border-b border-gray-300 py-2">
            <div className="text-gray-900">{activity.description}</div>
            <div className="text-gray-500 text-sm">{activity.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivity