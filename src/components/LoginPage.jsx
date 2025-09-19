import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [role, setRole] = useState('NGO');
    const [userName, setUserName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (userName.trim()) {
            setLoggedIn(true);
        }
        if (role == "NCCR") {
            navigate("/admin");
        } else if (role == "Validator") {
            navigate("/validator")
        }
    };

    return (
        <>
            <div className="app-container min-h-screen flex items-center justify-center bg-gray-50">
                <form
                    className="bg-white shadow rounded-2xl px-10 py-10 w-full max-w-md"
                    onSubmit={handleLogin}
                >
                    <div className="font-bold text-3xl text-green-600 mb-6 text-center">Login to CarbonSetu</div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-4 py-2 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="username">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-lg font-medium mb-2">Select Role</label>
                        <select
                            className="w-full px-4 py-2 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        >
                            <option value="NGO">NGO</option>
                            <option value="NCCR">NCCR</option>
                            <option value="Validator">Validator</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl text-lg"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
