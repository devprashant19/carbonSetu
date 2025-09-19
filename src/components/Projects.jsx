import React from 'react'

function Projects() {
    const projects = [
        { name: 'Project Alpha', developer: 'Alice', dueDate: '2024-05-01', action: 'Verify' },
        { name: 'Project Beta', developer: 'Bob', dueDate: '2024-06-15', action: 'Validate' },
        { name: 'Project Gamma', developer: 'Charlie', dueDate: '2024-07-30', action: 'Verify' },
    ];
  return (
    <div className="projects-container px-4">
      <h2 className="text-xl px-4 text-gray-700 font-bold mb-4">Projects</h2>
      <table className="min-w-full border text-black border-gray-900">
        <thead>
          <tr className="bg-green-200">
            <th className="border px-4 py-2 text-left">Project Name</th>
            <th className="border px-4 py-2 text-left">Developer</th>
            <th className="border px-4 py-2 text-left">Due Date</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
       <tbody>
  {projects.map((project, idx) => (
    <tr key={idx} className="hover:bg-gray-50">
      <td className="border px-4 py-2" data-label="Project Name">{project.name}</td>
      <td className="border px-4 py-2" data-label="Developer">{project.developer}</td>
      <td className="border px-4 py-2" data-label="Due Date">{project.dueDate}</td>
      <td className="border px-4 py-2" data-label="Actions">
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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

export default Projects