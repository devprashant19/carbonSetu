import React, { useState, useEffect } from 'react';
import HomeNav from './HomeNav';
import projectsData from '../data/registryProjects.json';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
const RegistryProjects = () => {
  const [projectData, setProjectData] = useState(null);
  const [activeTab, setActiveTab] = useState('DETAILS');
  const [loading, setLoading] = useState(true);
    const { id } = useParams();
  useEffect(() => {
    const sampleData = projectsData.find(p => p.id.toString() === id);
    setProjectData(sampleData);
    setLoading(false);
  }, []);

  const tabs = [
    { id: 'DETAILS', label: 'DETAILS', count: null },
    { id: 'REGISTRIES', label: 'REGISTRIES', count: projectData?.registries || 0 },
    { id: 'RATINGS', label: 'RATINGS', count: projectData?.ratings || 0 },
    { id: 'ISSUANCES', label: 'ISSUANCES', count: projectData?.issuances || 0 },
    { id: 'RETIREMENTS', label: 'RETIREMENTS', count: projectData?.retirements || 0 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading project data...</div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-red-600">Error loading project data</div>
      </div>
    );
  }

  return (
    <>
    <HomeNav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Project Title */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Project {projectData.name}
            </h2>
            <a href="/registry" className="bg-green-600 text-white px-2 py-1 rounded text-sm">
              Back
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-0 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className="ml-1">({tab.count})</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Details Content */}
        {activeTab === 'DETAILS' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <span className="font-semibold text-gray-700">Name: </span>
                <span className="text-gray-600">{projectData.name}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Scope: </span>
                <span className="text-gray-600">{projectData.scope}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Type: </span>
                <span className="text-gray-600">{projectData.type}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Region: </span>
                <span className="text-gray-600">{projectData.region}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Country: </span>
                <span className="text-gray-600">{projectData.country}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">State: </span>
                <span className="text-gray-600">{projectData.state || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Location: </span>
                <span className="text-gray-600">{projectData.location || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Developer: </span>
                <span className="text-gray-600">{projectData.developer}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Total Issued: </span>
                <span className="text-gray-600">{projectData.totalIssued}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Total Retired: </span>
                <span className="text-gray-600">{projectData.totalRetired}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Total Outstanding: </span>
                <span className="text-gray-600">{projectData.totalOutstanding}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Total Issued on Future Years: </span>
                <span className="text-gray-600">{projectData.totalIssuedFutureYears}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Total Retired on Unknown Years: </span>
                <span className="text-gray-600">{projectData.totalRetiredUnknownYears}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">First Project Year: </span>
                <span className="text-gray-600">{projectData.firstProjectYear || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Project Owner: </span>
                <span className="text-gray-600">{projectData.projectOwner || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Offset Project Operator: </span>
                <span className="text-gray-600">{projectData.offsetProjectOperator || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Authorized Project Designee: </span>
                <span className="text-gray-600">{projectData.authorizedProjectDesignee || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Voluntary Status: </span>
                <span className="text-gray-600">{projectData.voluntaryStatus}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Project Website: </span>
                <span className="text-gray-600">{projectData.projectWebsite || 'N/A'}</span>
              </div>
              
              <div className="md:col-span-2">
                <span className="font-semibold text-gray-700">Notes: </span>
                <span className="text-gray-600">{projectData.notes || 'N/A'}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-700">Date Added: </span>
                <span className="text-gray-600">{projectData.dateAdded}</span>
              </div>
              
              <div className="md:col-span-2">
                <span className="font-semibold text-gray-700">Source: </span>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {projectData.source || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Other Tab Contents */}
        {activeTab !== 'DETAILS' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                {activeTab} content will be displayed here
              </div>
              <div className="text-sm text-gray-400 mt-2">
                ({tabs.find(tab => tab.id === activeTab)?.count || 0} items)
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RegistryProjects;