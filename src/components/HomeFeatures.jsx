import React from 'react';

function HomeFeatures() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Features</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Mobile app for geo-tagged field data uploads (photos, videos, drone scans) by communities.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2"> Decentralized Data Collection</h3>
            <p className="text-gray-600">
              Automated monitoring using drones and satellite data. Perceptual Hashing to prevent data fraud. Human validators (NCCR) for oversight and trust.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Hybrid MRV (Monitoring, Reporting, Verification)</h3>
            <p className="text-gray-600">
              Advanced AI analyzes complaints to prioritize and categorize for efficient handling.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Tokenization & Marketplace</h3>
            <p className="text-gray-600">
                Smart contracts tokenize verified carbon credits into unique digital assets.
Secure marketplace connects communities with buyers.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Smart Contracts</h3>
            <p className="text-gray-600">
                These will be used to automatically issue carbon credits when projects are verified, ensuring trust and automating the process.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Marketplace</h3>
            <p className="text-gray-600">
                These will be used to automatically issue carbon credits when projects are verified, ensuring trust and automating the process.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Human-in-the-Loop</h3>
            <p className="text-gray-600">
               Automated data is reviewed and approved by human validators (e.g., NCCR), who use the system to confirm project health and progress efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;