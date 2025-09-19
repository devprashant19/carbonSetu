import React from 'react'

function ActionPanel() {
  return (
  <div className="px-10 py-10 my-8 rounded-2xl bg-white shadow">
  <h2 className="text-2xl px-2 py-6 text-gray-700 font-bold mb-6">Actions</h2>
  <table className="min-w-full bg-emerald-100 border border-gray-900 rounded-xl overflow-hidden">
        <tbody>
          <tr className="border-b border-gray-900">
            <td className="px-6 py-4 font-medium text-gray-900">Upload Verification Report</td>
            <td className="px-6 py-4">
              <input className='border text-gray-900 border-gray-300 rounded-lg p-2 mr-4' type="file" />
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Upload
                </button></td>
          </tr>
          <tr className="border-b border-gray-900">
            <td className="px-6 py-4 font-medium text-gray-900">Submit Validation Statement</td>
            <td className="px-6 py-4">
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Submit
                </button> </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-gray-900">Request Clarification</td>
            <td className="px-6 py-4">
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Request
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ActionPanel