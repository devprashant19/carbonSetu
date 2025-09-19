import React from 'react';
import { useNavigate } from 'react-router-dom';
function HomeHeroSection() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    return (
        <section className="h-[50vh] my-10 flex-1 flex flex-col justify-center items-center bg-gray-100 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                CarbonSetu
            </h1>
            <p className="text-lg max-w-xl mx-auto mb-8 text-gray-600">
                Welcome to CarbonSetu — your gateway to secure, transparent, and decentralized complaint management. Our platform ensures your voice is heard, your data is protected, and every concern is tracked until resolution. Join us in building a fair and accountable system for all.
            </p>
            <button onClick={handleLogin} className="px-6 py-3 text-base bg-green-600 text-white rounded hover:bg-green-700 transition">
                Login
            </button>
        </section>
    );
}

export default HomeHeroSection;