import React from 'react';

function HomeFeatures() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Features</h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          The mobile application enables communities to upload geo-tagged field data, including photographs, videos, and drone scans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  ">
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Decentralized Data Collection</h3>
            <p className="text-gray-700">
              Monitoring is conducted automatically through drones and satellite data. Perceptual hashing is utilized to mitigate data fraud, while human validators from NCCR provide oversight and ensure trustworthiness.
            </p>
          </div>
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hybrid MRV (Monitoring, Reporting, Verification)</h3>
            <p className="text-gray-700">
              Advanced artificial intelligence analyzes complaints to prioritize and categorize them, thereby facilitating efficient resolution.
            </p>
          </div>
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tokenization & Marketplace</h3>
            <p className="text-gray-700">
              Verified carbon credits are tokenized into unique digital assets via smart contracts. The secure marketplace connects communities directly with buyers.
            </p>
          </div>
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Contracts</h3>
            <p className="text-gray-700">
              Smart contracts automatically issue carbon credits upon project verification, thereby ensuring trust and streamlining the process.
            </p>
          </div>
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketplace</h3>
            <p className="text-gray-700">
              The marketplace facilitates the automatic issuance of carbon credits following project verification, promoting transparency and efficiency.
            </p>
          </div>
          <div className="border border-gray-700 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Human-in-the-Loop</h3>
            <p className="text-gray-700">
              Automated data is subject to review and approval by human validators, such as those from NCCR, who utilize the system to confirm project health and progress in an efficient manner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;