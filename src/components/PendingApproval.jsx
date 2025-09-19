import React, { useState } from 'react';
import uploadToPinata from '../utils/uploadPinata.js';

function PendingApproval() {
  const initialOrgs = [
    { uid:1,name: 'EcoCarbon Pvt Ltd', type: 'Developer', status: 'Pending', action: 'Approve' },
    { uid:2,name: 'BrokerX Ltd', type: 'Transaction', status: 'Pending', action: 'Reject' },
    { uid: 3, name: 'GreenFuture Org', type: 'Validator', status: 'Pending', action: 'Approve' },
    { uid: 4, name: 'CarbonBridge Inc', type: 'Developer', status: 'Pending', action: 'Reject' },
    { uid: 5, name: 'EnviroTrade LLC', type: 'Transaction', status: 'Pending', action: 'Approve' },
  ];

  const [orgs, setOrgs] = useState(initialOrgs);
  const [processed, setProcessed] = useState([]);

  const handleClick = (org) => {
    if (!processed.includes(org.uid)) {
      if (org.action === 'Approve') {
        uploadToPinata({ name: org.name, type: org.type });
      } else if (org.action === 'Reject') {
        alert(`${org.name} rejected`);
      }
      setProcessed([...processed, org.uid]);
      setOrgs(orgs.map(o => o.uid === org.uid ? { ...o, status: 'Completed' } : o));
    }
  };

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
                  onClick={() => handleClick(org)}
                  disabled={processed.includes(org.uid)}
                  className={`px-3 py-1 rounded text-white ${
                    processed.includes(org.uid)
                      ? 'bg-gray-400 cursor-not-allowed'
                      : org.action === 'Approve'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  {org.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingApproval;