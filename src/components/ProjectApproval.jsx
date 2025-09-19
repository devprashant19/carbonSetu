import React from 'react'

function ProjectApproval() {
  const projects = [
    {
      name: 'Wind Farm 2025',
      developer: 'GreenEnergy Ltd',
      vvbStatus: 'Verified',
      action: 'Issue Credits',
    },
    {
      name: 'Solar Park A2',
      developer: 'SolarCo Pvt Ltd',
      vvbStatus: 'Clarified',
      action: 'Hold',
    },
  ];
  return (
    <div className="px-4">
      <h2 className="text-xl px-4 text-gray-700 font-bold mb-4">Project Approval</h2>
      <table className="min-w-full border text-black border-gray-900">
        <thead>
          <tr className="bg-green-200">
            <th className="border px-4 py-2 text-left">Project Name</th>
            <th className="border px-4 py-2 text-left">Developer</th>
            <th className="border px-4 py-2 text-left">VVB Status</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.developer}</td>
              <td className="border px-4 py-2">{project.vvbStatus}</td>
              <td className="border px-4 py-2">
                <button
                  className={`px-3 py-1 rounded text-white ${project.action === 'Issue Credits' ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'}`}
                >
                  {project.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectApproval