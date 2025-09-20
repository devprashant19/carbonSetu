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
                Welcome to CarbonSetu — Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, sequi accusantium? Cum blanditiis nobis consectetur voluptate cupiditate facere, fugiat non eligendi minus laborum est, sed harum nulla id aliquam aut suscipit quam eaque facilis vitae. Ut nostrum obcaecati quisquam.</p>
            <button onClick={handleLogin} className="px-10 py-3 text-base cursor-pointer font-bold bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                Login
            </button>
        </section>
    );
}

export default HomeHeroSection;