import React from 'react'

function PendingApproval() {
  const orgs = [
    { name: 'EcoCarbon Pvt Ltd', type: 'Developer', status: 'Pending', action: 'Approve' },
    { name: 'BrokerX Ltd', type: 'Transaction', status: 'Pending', action: 'Reject' },
  ];
  return (
    <div className="px-4">
      <h2 className="text-xl px-4 text-gray-700 font-bold mb-4">Pending Approval</h2>
      <table className="min-w-full border text-black border-gray-900">
        <thead>
          <tr className="bg-green-200">
            <th className="border px-4 py-2 text-left">Org Name</th>
            <th className="border px-4 py-2 text-left">Account Type</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orgs.map((org, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{org.name}</td>
              <td className="border px-4 py-2">{org.type}</td>
              <td className="border px-4 py-2">{org.status}</td>
              <td className="border px-4 py-2">
                <button
                  className={`px-3 py-1 rounded text-white ${org.action === 'Approve' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
                >
                  {org.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PendingApproval