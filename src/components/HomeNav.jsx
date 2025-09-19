import { useNavigate } from "react-router-dom";
const HomeNav = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };
    const handleSignup = () => {
        navigate('/signup');
    }
  return (
    <nav className="bg-gray-100 shadow-md w-full top-0 left-0">
      <div className="w-full px-16">
        <div className="flex items-center justify-between h-20 w-full">
          <span className="font-bold text-2xl text-green-600">CarbonSetu</span>
          <div className="flex-1 flex justify-end">
            <div className="flex space-x-5">
              <a href="#" className="text-green-500 font-bold hover:text-green-600 px-6 py-2 rounded-full text-xl">View Registry</a>
              <button onClick={handleLogin} className="px-8 py-3 text-base font-bold cursor-pointer bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                Login
            </button>
              <button onClick={handleSignup} className="px-8 py-3 text-base font-bold cursor-pointer text-gray-600 rounded-full border border-gray-600 hover:bg-gray-300 transition">
                Signup
            </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HomeNav;