import React from 'react'

function AdminAction() {
  return (
  <div className="px-10 py-10 my-8 rounded-2xl bg-white shadow">
  <h2 className="text-2xl px-2 py-6 text-gray-700 font-bold mb-6">Actions</h2>
  <table className="min-w-full bg-emerald-100 border border-gray-900 rounded-xl overflow-hidden">
        <tbody>
          <tr className="border-b border-gray-900">
            <td className="px-6 py-4 font-medium text-gray-900">Issue Credits</td>
            <td className="px-6 py-4">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                Issue
              </button>
            </td>
          </tr>
          <tr className="border-b border-gray-900">
            <td className="px-6 py-4 font-medium text-gray-900">Suspend Account</td>
            <td className="px-6 py-4">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                Suspend
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-gray-900">Generate Registry Report</td>
            <td className="px-6 py-4">
              <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                Generate
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminAction